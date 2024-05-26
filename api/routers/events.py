from fastapi import APIRouter, HTTPException, Depends, Query
from starlette import status
from models import Event, Country, EventType, Organiser
from schemas.ecsa_conf import EventSchema
from sqlalchemy.orm import Session, joinedload
from database import get_db
from .auth import get_current_user
from typing import Annotated
from sqlalchemy import or_
import math
from dependencies import Security
from sqlalchemy import func

router = APIRouter()

security = Security()

user_dependency = Annotated[dict, Depends(get_current_user)]


def get_object(id, db, model):
    data = db.query(model).filter(model.id == id).first()
    if data is None:
        raise HTTPException(status_code=404, detail=f"ID {id} : Does not exist")
    return data


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
    user: user_dependency,
    db: Session = Depends(get_db),
):
    security.secureAccess("VIEW_EVENT", user["id"], db)
    event = get_object(event_id, db, Event)

    if not event:
        raise HTTPException(status_code=404, detail="Event not found")

    return {
        "Event": {
            "id": event.id,
            "event": event.event,
            "event_type": event.event_type.event_type,
            "organiser": event.organiser.organiser,
            "location": event.location,
            "capacity": event.capacity,
            "description": event.description,
            "country": event.country.country,
            "start_date": event.start_date,
            "end_date": event.end_date,
            "registration_start_date": event.end_date,
            "registration_end_date": event.end_date,
        },
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
