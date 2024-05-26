from pydantic import BaseModel
from datetime import date, datetime


class UserSchema(BaseModel):
    firstname: str
    lastname: str
    phone: str
    email: str


class PasswordSchema(BaseModel):
    password: str


class TokenSchema(BaseModel):
    access_token: str
    token_type: str


class RoleSchema(BaseModel):
    role: str
    description: str


class UserRoleSchema(BaseModel):
    user_id: int
    role_id: int


class PermissionSchema(BaseModel):
    permission: str
    permission_code: str


class RolePermissionSchema(BaseModel):
    role_id: int
    permission_id: int


class CountrySchema(BaseModel):
    country: str
    short_code: str
    phone_code: str


class EventTypeSchema(BaseModel):
    event_type: str
    description: str


class OrganiserSchema(BaseModel):
    organiser: str
    description: str


class EventSchema(BaseModel):
    event_type_id: int
    country_id: int
    organiser_id: int
    event: str
    location: str
    capacity: int
    description: str
    start_date: datetime
    end_date: datetime
    registration_start_date: datetime
    registration_end_date: datetime


class ParticipantSchema(BaseModel):
    country_id: int
    title: str
    firstname: str
    lastname: str
    phone: str
    email: str
    institution: str
