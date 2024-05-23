import os
from fastapi import (
    APIRouter,
    HTTPException,
    Depends,
    Query,
    status,
    File,
    UploadFile,
    Form,
)
from starlette import status
from models import Users, UserRole, UserSignature
from schemas.maladis import UserSchema, UserRoleSchema, PasswordSchema
from sqlalchemy.orm import Session
from database import get_db
from .auth import get_current_user
from typing import Annotated
from sqlalchemy import or_
import math
from passlib.hash import bcrypt
from dependencies import Security
from fastapi.responses import FileResponse
import uuid
import utils

router = APIRouter()

user_dependency = Annotated[dict, Depends(get_current_user)]
security = Security()


def get_object(id, db, model):
    data = db.query(model).filter(model.id == id).first()
    if data is None:
        raise HTTPException(status_code=404, detail=f"ID {id} : Does not exist")
    return data


@router.get("/")
async def get_users(
    user: user_dependency,
    db: Session = Depends(get_db),
    skip: int = Query(default=1, ge=1),
    limit: int = 10,
    search: str = "",
):
    security.secureAccess("VIEW_USER", user["id"], db)
    offset = (skip - 1) * limit
    query = (
        db.query(Users)
        .filter(
            or_(
                Users.firstname.ilike(f"%{search}%"),
                Users.lastname.ilike(f"%{search}%"),
                Users.email.ilike(f"%{search}%"),
            )
        )
        .offset(offset)
        .limit(limit)
        .all()
    )
    total_count = (
        db.query(Users)
        .filter(
            or_(
                Users.firstname.ilike(f"%{search}%"),
                Users.lastname.ilike(f"%{search}%"),
                Users.email.ilike(f"%{search}%"),
            )
        )
        .count()
    )
    pages = math.ceil(total_count / limit)
    return {"pages": pages, "data": query}


@router.post("/")
async def add_user(
    user_schema: UserSchema,
    user: user_dependency,
    db: Session = Depends(get_db),
):
    security.secureAccess("ADD_USER", user["id"], db)

    existing_email = db.query(Users).filter(Users.email == user_schema.email).first()
    if existing_email:
        raise HTTPException(status_code=400, detail="Email already exists")

    existing_phone = db.query(Users).filter(Users.phone == user_schema.phone).first()
    if existing_phone:
        raise HTTPException(status_code=400, detail="Phone number already exists")

    password = utils.generate_random_password()

    hashed_password = bcrypt.hash(password)
    create_user_model = Users(
        firstname=user_schema.firstname,
        lastname=user_schema.lastname,
        phone=user_schema.phone,
        email=user_schema.email,
        hashed_password=hashed_password,
        verified=1,
    )

    db.add(create_user_model)
    db.commit()
    utils.new_account_email(user_schema.email, user_schema.firstname, password)
    return user_schema


@router.get("/{user_id}")
async def get_user(
    user_id: int,
    user: user_dependency,
    db: Session = Depends(get_db),
):
    security.secureAccess("VIEW_USER", user["id"], db)
    model = Users
    user = get_object(user_id, db, model)

    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    return {
        "user": {
            "id": user.id,
            "email": user.email,
            "firstname": user.firstname,
            "lastname": user.lastname,
            "phone": user.phone,
        },
        "roles": [
            {
                "id": role.id,
                "role_id": role.role.id,
                "role": role.role.role,
            }
            for role in user.user_role
        ],
        "signatures": [
            {
                "id": signature.id,
                "file_name": signature.file_name,
                "file_location": signature.file_location,
            }
            for signature in user.user_signature
        ],
    }


@router.put("/{user_id}")
async def update_user(
    user_id: int,
    user: user_dependency,
    user_schema: UserSchema,
    db: Session = Depends(get_db),
):
    security.secureAccess("UPDATE_USER", user["id"], db)
    user_model = get_object(user_id, db, Users)

    user_model.firstname = user_schema.firstname
    user_model.lastname = user_schema.lastname
    user_model.phone = user_schema.phone
    user_model.email = user_schema.email

    db.commit()
    db.refresh(user_model)
    return user_schema


@router.delete("/{user_id}")
async def delete_user(
    user_id: int,
    user: user_dependency,
    db: Session = Depends(get_db),
):
    security.secureAccess("DELETE_USER", user["id"], db)
    get_object(user_id, db, Users)
    db.query(Users).filter(Users.id == user_id).delete()
    db.commit()
    raise HTTPException(
        status_code=status.HTTP_200_OK, detail="Users Successfully deleted"
    )


@router.put("/password/{user_id}")
async def update_password(
    user_id: int,
    user: user_dependency,
    db: Session = Depends(get_db),
):
    # security.secureAccess("UPDATE_USER", user["id"], db)
    user = get_object(user_id, db, Users)
    password = utils.generate_random_password()

    db.query(Users).filter(Users.id == user_id).update(
        {"hashed_password": utils.hash_password(password)}
    )
    db.commit()
    # Send a confirmation email (you can customize this part)
    utils.password_change_email(user.email, user.firstname, password)
    raise HTTPException(status_code=200, detail="Password updated successfully")


@router.put("/reset_password/{user_id}")
async def reset_password(
    user_id: int,
    user: user_dependency,
    password_schema: PasswordSchema,
    db: Session = Depends(get_db),
):
    # security.secureAccess("UPDATE_USER", user["id"], db)
    user = get_object(user_id, db, Users)
    password = password_schema.password

    db.query(Users).filter(Users.id == user_id).update(
        {"hashed_password": utils.hash_password(password)}
    )
    db.commit()
    # Send a confirmation email (you can customize this part)
    utils.password_change_email(user.email, user.firstname, password)
    raise HTTPException(status_code=200, detail="Password rest was successfull")


@router.post("/roles/")
async def add_user_role(
    user_role_schema: UserRoleSchema,
    user: user_dependency,
    db: Session = Depends(get_db),
):
    security.secureAccess("ADD_USER", user["id"], db)
    user_role_model = UserRole(
        user_id=user_role_schema.user_id, role_id=user_role_schema.role_id
    )

    db.add(user_role_model)
    db.commit()
    db.refresh(user_role_model)
    return user_role_model


@router.put("/roles/{user_role_id}")
async def update_user_role(
    user_role_id: int,
    user_role_schema: UserRoleSchema,
    user: user_dependency,
    db: Session = Depends(get_db),
):
    security.secureAccess("UPDATE_USER", user["id"], db)
    user_role_model = db.query(UserRole).filter(UserRole.id == user_role_id).first()
    user_role_model.user_id = (user_role_schema.user_id,)
    user_role_model.role_id = user_role_schema.role_id
    db.add(user_role_model)
    db.commit()
    db.refresh(user_role_model)
    return user_role_model


@router.delete("/roles/{user_role_id}")
async def delete_user_role(
    user_role_id: int,
    user: user_dependency,
    db: Session = Depends(get_db),
):
    security.secureAccess("DELETE_USER", user["id"], db)

    db.query(UserRole).filter(UserRole.id == user_role_id).delete()
    db.commit()
    raise HTTPException(status_code=200, detail="Users role successfully deleted")


@router.get("/signatures/{user_id}")
async def get_user_signature(
    user_id: int,
    user: user_dependency,
    db: Session = Depends(get_db),
):
    security.secureAccess("VIEW_USER", user["id"], db)

    return db.query(UserSignature).filter(UserSignature.user_id == user_id).first()


@router.post("/signatures/")
async def add_user_signature(
    user: user_dependency,
    file: UploadFile = File(...),
    user_id: int = Form(...),
    db: Session = Depends(get_db),
):
    security.secureAccess("ADD_USER", user["id"], db)

    file_location = uuid.uuid4().hex
    os.mkdir(f"uploads/signatures/{file_location}")

    user_signatures = (
        db.query(UserSignature).filter(UserSignature.user_id == user_id).all()
    )

    if user_signatures:
        for user_signature in user_signatures:
            os.remove(user_signature.file_location)
            db.query(UserSignature).filter(
                UserSignature.id == user_signature.id
            ).delete()
            db.commit()

    try:
        with open(f"uploads/signatures/{file_location}/{file.filename}", "wb") as f:
            f.write(file.file.read())
            user_signature_model = UserSignature(
                file_name=file.filename,
                user_id=user_id,
                file_size=0,
                file_type=file.content_type,
                file_location=(f"uploads/signatures/{file_location}/{file.filename}"),
            )

            db.add(user_signature_model)
            db.commit()
            db.refresh(user_signature_model)

            if user_signature_model.id is not None:
                return {
                    "user_signature_id": user_signature_model.id,
                    "file_name": file.filename,
                    "user_id": user_id,
                    "file_type": file.content_type,
                    "file_location": (f"uploads/signatures/{file_location}"),
                }
        os.remove(file_location)
        raise HTTPException(
            status_code=404, detail="File creation in database failed, file deleted"
        )
    except Exception as e:
        return {"error": str(e)}


@router.get("/show_signatures/")
async def get_user_signature_image(
    file_location: str,
    user: user_dependency,
    db: Session = Depends(get_db),
):
    security.secureAccess("VIEW_USER", user["id"], db)
    try:
        return FileResponse(file_location)
    except Exception as e:
        raise HTTPException(status_code=404, detail="Image not found")


@router.delete("/signatures/{signature_id}")
async def delete_user_signature(
    signature_id: int,
    user: user_dependency,
    db: Session = Depends(get_db),
):
    security.secureAccess("DELETE_USER", user["id"], db)

    user_signature = (
        db.query(UserSignature).filter(UserSignature.id == signature_id).first()
    )
    try:
        os.remove(user_signature.file_location)
        db.query(UserSignature).filter(UserSignature.id == signature_id).delete()
        db.commit()
        raise HTTPException(
            status_code=200,
            detail=f"Signatyre {user_signature.file_location} removed successfully.",
        )
    except OSError as e:
        raise HTTPException(
            status_code=404,
            detail=f"Error: {e}",
        )
