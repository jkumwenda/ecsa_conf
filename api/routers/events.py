from fastapi import APIRouter, HTTPException, Depends, Query
from starlette import status
from models import Event, Country, EventType, Organiser, UserEvent, Participant, Users
from schemas.ecsa_conf import EventSchema, EventRegistrationSchema
from sqlalchemy.orm import Session, joinedload
from database import get_db
from .auth import get_current_user
from typing import Annotated
from sqlalchemy import or_
import math
from dependencies import Security
from datetime import datetime
from fastapi.responses import FileResponse
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
import os

router = APIRouter()

security = Security()

user_dependency = Annotated[dict, Depends(get_current_user)]


def get_object(id, db, model):
    data = db.query(model).filter(model.id == id).first()
    if data is None:
        raise HTTPException(status_code=404, detail=f"ID {id} : Does not exist")
    return data


def create_pdf(file_path: str, cards: list):
    c = canvas.Canvas(file_path, pagesize=letter)
    width, height = letter

    cards_per_page = 4
    card_height = height / cards_per_page

    for i, card in enumerate(cards):
        if i % cards_per_page == 0 and i != 0:
            c.showPage()

        y_position = height - (i % cards_per_page) * card_height - 50

        c.drawString(100, y_position, f"Card {i+1}: {card['title']}")
        c.drawString(100, y_position - 20, f"Content: {card['content']}")

    c.save()


@router.get("/")
async def get_events(
    user: user_dependency,
    db: Session = Depends(get_db),
    skip: int = Query(default=1, ge=1),
    limit: int = 10,
    search: str = "",
):
    security.secureAccess("VIEW_EVENT", user["id"], db)

    offset = (skip - 1) * limit
    query = (
        db.query(Event)
        .join(Country, Event.country_id == Country.id)
        .join(EventType, Event.event_type_id == EventType.id)
        .join(Organiser, Event.organiser_id == Organiser.id)
        .filter(or_(Event.event.ilike(f"%{search}%")))
        .options(
            joinedload(Event.country),
            joinedload(Event.organiser),
            joinedload(Event.event_type),
        )
        .offset(offset)
        .limit(limit)
        .all()
    )
    total_count = db.query(Event).filter(or_(Event.event.ilike(f"%{search}%"))).count()
    pages = math.ceil(total_count / limit)
    return {"pages": pages, "data": query}


@router.post("/")
async def add_event(
    event_schema: EventSchema,
    user: user_dependency,
    db: Session = Depends(get_db),
):
    security.secureAccess("ADD_EVENT", user["id"], db)
    create_event_model = Event(
        event_type_id=event_schema.event_type_id,
        country_id=event_schema.country_id,
        organiser_id=event_schema.organiser_id,
        event=event_schema.event,
        location=event_schema.location,
        capacity=event_schema.capacity,
        description=event_schema.description,
        start_date=event_schema.start_date,
        end_date=event_schema.end_date,
        registration_start_date=event_schema.registration_start_date,
        registration_end_date=event_schema.registration_end_date,
    )
    db.add(create_event_model)
    db.commit()
    return event_schema


@router.get("/{event_id}")
async def get_event(
    event_id: int,
    db: Session = Depends(get_db),
    skip: int = Query(default=1, ge=1),
    limit: int = 10,
    search: str = "",
):
    event_data = (
        db.query(
            Event.id,
            EventType.event_type,
            Country.country,
            Organiser.organiser,
            Event.event,
            Event.location,
            Event.description,
            Event.capacity,
            Event.start_date,
            Event.end_date,
            Event.registration_start_date,
            Event.registration_end_date,
        )
        .filter(Event.id == event_id)
        .first()
    )
    event = {
        "id": event_data.id,
        "event_type": event_data.event_type,
        "country": event_data.country,
        "organiser": event_data.organiser,
        "event": event_data.event,
        "location": event_data.location,
        "description": event_data.description,
        "capacity": event_data.capacity,
        "start_date": event_data.start_date,
        "end_date": event_data.end_date,
        "registration_start_date": event_data.registration_start_date,
        "registration_end_date": event_data.registration_end_date,
    }

    if not event:
        raise HTTPException(status_code=404, detail="Event not found")

    offset = (skip - 1) * limit

    # Specify the columns to retrieve
    query = (
        db.query(
            Users.id,
            Participant.title,
            Users.firstname,
            Users.lastname,
            Users.email,
            Users.phone,
            Participant.institution,
            Country.country,
            Participant.picture,
            UserEvent.participant_category,
            UserEvent.confirm_attendance,
            UserEvent.event_badge,
            UserEvent.event_payment,
        )
        .join(Participant, Participant.user_id == Users.id)
        .join(UserEvent, UserEvent.user_id == Users.id)
        .join(Country, Country.id == Participant.country_id)
        .filter(
            UserEvent.event_id == event_id,
            or_(
                Users.firstname.ilike(f"%{search}%"),
                Users.lastname.ilike(f"%{search}%"),
                Users.email.ilike(f"%{search}%"),
            ),
        )
        .offset(offset)
        .limit(limit)
        .all()
    )

    # Total count for pagination
    total_count = (
        db.query(Users)
        .filter(
            UserEvent.event_id == event_id,
            or_(
                Users.firstname.ilike(f"%{search}%"),
                Users.lastname.ilike(f"%{search}%"),
                Users.email.ilike(f"%{search}%"),
            ),
        )
        .count()
    )
    pages = math.ceil(total_count / limit)
    formatted_data = [
        {
            "id": user.id,
            "title": user.title,
            "firstname": user.firstname,
            "lastname": user.lastname,
            "email": user.email,
            "phone": user.phone,
            "institution": user.institution,
            "country": user.country,
            "picture": user.picture,
            "participant_category": user.participant_category,
            "confirm_attendance": user.confirm_attendance,
            "event_badge": user.event_badge,
            "event_payment": user.event_payment,
        }
        for user in query
    ]
    return {"pages": pages, "data": formatted_data, "event": event}


@router.put("/{event_id}")
async def update_event(
    event_id: int,
    user: user_dependency,
    event_schema: EventSchema,
    db: Session = Depends(get_db),
):
    security.secureAccess("UPDATE_EVENT", user["id"], db)
    event_model = get_object(event_id, db, Event)

    event_model.event_type_id = event_schema.event_type_id
    event_model.country_id = event_schema.country_id
    event_model.organiser_id = event_schema.organiser_id
    event_model.event = event_schema.event
    event_model.location = event_schema.location
    event_model.capacity = event_schema.capacity
    event_model.description = event_schema.description
    event_model.start_date = event_schema.start_date
    event_model.end_date = event_schema.end_date
    event_model.registration_start_date = event_schema.registration_start_date
    event_model.registration_end_date = event_schema.registration_end_date

    db.commit()
    db.refresh(event_model)
    return event_schema


@router.delete("/{event_id}")
async def delete_event(
    event_id: int,
    user: user_dependency,
    db: Session = Depends(get_db),
):
    security.secureAccess("DELETE_EVENT", user["id"], db)
    get_object(event_id, db, Event)
    db.query(Event).filter(Event.id == event_id).delete()
    db.commit()
    raise HTTPException(
        status_code=status.HTTP_200_OK, detail="Event successfully deleted"
    )


@router.get("/active/")
async def get_active_events(
    db: Session = Depends(get_db),
    skip: int = Query(default=1, ge=1),
    limit: int = 10,
    search: str = "",
):
    offset = (skip - 1) * limit
    current_time = datetime.now()

    query = (
        db.query(Event)
        .join(Country, Event.country_id == Country.id)
        .join(EventType, Event.event_type_id == EventType.id)
        .join(Organiser, Event.organiser_id == Organiser.id)
        .filter(or_(Event.event.ilike(f"%{search}%")), Event.end_date >= current_time)
        .options(
            joinedload(Event.country),
            joinedload(Event.organiser),
            joinedload(Event.event_type),
        )
        .offset(offset)
        .limit(limit)
        .all()
    )
    total_count = db.query(Event).filter(or_(Event.event.ilike(f"%{search}%"))).count()
    pages = math.ceil(total_count / limit)
    return {"pages": pages, "data": query}


@router.post("/register/")
async def register(
    event_registration_schema: EventRegistrationSchema,
    user: user_dependency,
    db: Session = Depends(get_db),
):

    if user["id"] is None:
        raise HTTPException(
            status_code=404, detail="You need to login to register for an event"
        )

    create_user_event_model = UserEvent(
        event_id=event_registration_schema.event_id,
        participant_category=event_registration_schema.participant_category,
        user_id=user["id"],
    )
    db.add(create_user_event_model)
    db.commit()
    return event_registration_schema


@router.delete("/deregister/{event_id}")
async def deregister(
    event_id: int,
    user: user_dependency,
    db: Session = Depends(get_db),
):

    if user["id"] is None:
        raise HTTPException(
            status_code=404, detail="You can only deregister your registered events"
        )

    user_event = (
        db.query(UserEvent)
        .filter(UserEvent.user_id == user["id"], UserEvent.event_id == event_id)
        .first()
    )

    db.query(UserEvent).filter(UserEvent.id == user_event.id).delete()
    db.commit()
    raise HTTPException(
        status_code=status.HTTP_200_OK, detail="User event successfully deleted"
    )
