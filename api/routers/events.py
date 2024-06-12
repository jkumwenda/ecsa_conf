from fastapi import APIRouter, HTTPException, Depends, Query
from starlette import status
from models import Event, Country, EventType, Organiser, UserEvent
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
    event = get_object(event_id, db, Event)

    if not event:
        raise HTTPException(status_code=404, detail="Event not found")

    return {
        "event": {
            "id": event.id,
            "event": event.event,
            "event_type": event.event_type.event_type,
            "event_type_id": event.event_type.id,
            "organiser": event.organiser.organiser,
            "organiser_id": event.organiser.id,
            "location": event.location,
            "capacity": event.capacity,
            "description": event.description,
            "country": event.country.country,
            "country_id": event.country.id,
            "start_date": event.start_date,
            "end_date": event.end_date,
            "registration_start_date": event.end_date,
            "registration_end_date": event.end_date,
        },
        "participants": [
            {
                "user_event_id": user.id,
                "user_id": user.user_id,
                "title": user.users.participant[0].title,
                "firstname": user.users.firstname,
                "lastname": user.users.lastname,
                "institution": user.users.participant[0].institution,
                "country": user.users.participant[0].country.country,
                "picture": user.users.participant[0].picture,
                "event_id": user.event_id,
                "participant_category": user.participant_category,
                "confirm_attendance": user.confirm_attendance,
                "event_badge": user.event_badge,
                "event_payment": user.event_payment,
                "created_date": user.created_at,
            }
            for user in event.user_event
        ],
    }


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
