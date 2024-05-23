from sqlalchemy import (
    Column,
    Integer,
    String,
    Text,
    ForeignKey,
    Boolean,
    TIMESTAMP,
    DATE,
    text,
    DATETIME,
    UniqueConstraint,
    DECIMAL,
)
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()


class Users(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    firstname = Column(String(45), nullable=False)
    lastname = Column(String(45), nullable=False)
    phone = Column(String(25), nullable=False, unique=True)
    email = Column(String(45), nullable=False, unique=True)
    hashed_password = Column(String(200), nullable=False)
    verified = Column(Boolean, nullable=False, server_default="False")
    created_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
    )
    updated_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
        onupdate=datetime.now,
    )
    user_role = relationship("UserRole", back_populates="users")
    product_approval = relationship("ProductApproval", back_populates="user")
    user_signature = relationship("UserSignature", back_populates="users")

    def __repr__(self):
        return f"<Users {self.id}>"


class Role(Base):
    __tablename__ = "role"

    id = Column(Integer, primary_key=True, index=True)
    role = Column(
        String(45),
        unique=True,
    )
    description = Column(
        Text,
        nullable=False,
    )
    created_at = Column(
        TIMESTAMP(timezone=True), nullable=False, server_default=text("now()")
    )
    updated_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("now()"),
        onupdate=datetime.now,
    )
    user_role = relationship("UserRole", back_populates="role")
    role_permission = relationship("RolePermission", back_populates="role")
    approval_stage = relationship("ApprovalStage", back_populates="role")

    def __repr__(self):
        return f"<Role {self.role}"


class UserRole(Base):
    __tablename__ = "user_role"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    role_id = Column(Integer, ForeignKey("role.id"), nullable=False)
    created_at = Column(
        TIMESTAMP(timezone=True), nullable=False, server_default=text("now()")
    )
    updated_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("now()"),
        onupdate=datetime.now,
    )
    __table_args__ = (UniqueConstraint(user_id, role_id, name="user_id_role_id"),)
    users = relationship("Users", back_populates="user_role")
    role = relationship("Role", back_populates="user_role")

    def __repr__(self):
        return f"<UserRole {self.user_role}"


class Permission(Base):
    __tablename__ = "permission"

    id = Column(Integer, primary_key=True, index=True)
    permission = Column(
        String(45),
        unique=True,
        nullable=False,
    )
    permission_code = Column(
        String(45),
        unique=True,
        nullable=False,
    )
    system_code = Column(
        String(45),
        unique=False,
        nullable=False,
    )
    created_at = Column(
        TIMESTAMP(timezone=True), nullable=False, server_default=text("now()")
    )
    updated_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("now()"),
        onupdate=datetime.now,
    )
    role_permission = relationship("RolePermission", back_populates="permission")

    def __repr__(self):
        return f"<Permission {self.permission}"


class RolePermission(Base):
    __tablename__ = "role_permission"

    id = Column(Integer, primary_key=True, index=True)
    role_id = Column(Integer, ForeignKey("role.id"), nullable=False)
    permission_id = Column(Integer, ForeignKey("permission.id"), nullable=False)
    created_at = Column(
        TIMESTAMP(timezone=True), nullable=False, server_default=text("now()")
    )
    updated_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("now()"),
        onupdate=datetime.now,
    )
    __table_args__ = (
        UniqueConstraint("role_id", "permission_id", name="role_id_permission_id"),
    )
    role = relationship("Role", back_populates="role_permission")
    permission = relationship("Permission", back_populates="role_permission")

    def __repr__(self):
        return f"<RolePermission {self.role_permission}"


class Country(Base):
    __tablename__ = "country"
    id = Column(Integer, primary_key=True, index=True)
    country = Column(String(100), unique=True, index=True)
    short_code = Column(String(5), unique=True, index=True)
    phone_code = Column(String(5), unique=True, index=True)
    created_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
    )
    updated_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
        onupdate=datetime.now,
    )
    manufacturer = relationship("Manufacturer", back_populates="country")
    applicant = relationship("Applicant", back_populates="country")
    product_manufacturer = relationship("ProductManufacturer", back_populates="country")
    product_active_ingredient = relationship(
        "ProductActiveIngredient", back_populates="country"
    )

    def __repr__(self):
        return f"<Country {self.id}>"


class Manufacturer(Base):
    __tablename__ = "manufacturer"

    id = Column(Integer, primary_key=True, index=True)
    manufacturer = Column(String(255))
    manufacturer_id = Column(Integer, unique=True, index=True)
    email = Column(String(100), unique=True, index=True)
    phone = Column(String(20))
    country_id = Column(Integer, ForeignKey("country.id"), nullable=False)
    address = Column(Text, nullable=True)
    created_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
    )
    updated_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
        onupdate=datetime.now,
    )
    country = relationship("Country", back_populates="manufacturer")
    product_manufacturer = relationship(
        "ProductManufacturer", back_populates="manufacturer"
    )
    product_active_ingredient = relationship(
        "ProductActiveIngredient", back_populates="manufacturer"
    )

    def __repr__(self):
        return f"<Manufacturer {self.id}>"


class Applicant(Base):
    __tablename__ = "applicant"

    id = Column(Integer, primary_key=True, index=True)
    applicant = Column(String(255))
    applicant_id = Column(Integer, unique=True, index=True)
    email = Column(String(100), unique=True, index=True)
    phone = Column(String(20))
    address = Column(Text, nullable=True)
    country_id = Column(Integer, ForeignKey("country.id"), nullable=False)
    created_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
    )
    updated_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
        onupdate=datetime.now,
    )
    country = relationship("Country", back_populates="applicant")
    product = relationship("Product", back_populates="applicant")

    def __repr__(self):
        return f"<applicant {self.id}>"


class ProductCategory(Base):
    __tablename__ = "product_category"

    id = Column(Integer, primary_key=True, index=True)
    product_category = Column(String(255))
    category_code = Column(String(255))
    description = Column(String(255))
    created_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
    )
    updated_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
        onupdate=datetime.now,
    )
    product = relationship("Product", back_populates="product_category")
    product_variation = relationship(
        "ProductVariation", back_populates="product_category"
    )

    def __repr__(self):
        return f"<product_category {self.id}>"


class TherapeuticCategory(Base):
    __tablename__ = "therapeutic_category"

    id = Column(Integer, primary_key=True, index=True)
    therapeutic_category = Column(String(255))
    description = Column(String(255))
    created_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
    )
    updated_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
        onupdate=datetime.now,
    )
    product = relationship("Product", back_populates="therapeutic_category")
    product_variation = relationship(
        "ProductVariation", back_populates="therapeutic_category"
    )

    def __repr__(self):
        return f"<therapeutic_category {self.id}>"


class AdministrationRoute(Base):
    __tablename__ = "administration_route"

    id = Column(Integer, primary_key=True, index=True)
    administration_route = Column(String(255))
    description = Column(String(255))
    created_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
    )
    updated_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
        onupdate=datetime.now,
    )
    product = relationship("Product", back_populates="administration_route")
    product_variation = relationship(
        "ProductVariation", back_populates="administration_route"
    )

    def __repr__(self):
        return f"<administration_route {self.id}>"


class GenericName(Base):
    __tablename__ = "generic_name"

    id = Column(Integer, primary_key=True, index=True)
    generic_name = Column(String(255))
    description = Column(String(255))
    created_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
    )
    updated_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
        onupdate=datetime.now,
    )
    product = relationship("Product", back_populates="generic_name")
    product_variation = relationship("ProductVariation", back_populates="generic_name")

    def __repr__(self):
        return f"<generic_name {self.id}>"


class DosageForm(Base):
    __tablename__ = "dosage_form"

    id = Column(Integer, primary_key=True, index=True)
    dosage_form = Column(String(255))
    description = Column(String(255))
    created_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
    )
    updated_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
        onupdate=datetime.now,
    )
    product = relationship("Product", back_populates="dosage_form")
    product_variation = relationship("ProductVariation", back_populates="dosage_form")

    def __repr__(self):
        return f"<dosage_form {self.id}>"


class Product(Base):
    __tablename__ = "product"

    id = Column(Integer, primary_key=True, index=True)
    product_id = Column(Integer, unique=True, index=True, nullable=False)
    product_category_id = Column(
        Integer, ForeignKey("product_category.id"), nullable=False
    )
    applicant_id = Column(Integer, ForeignKey("applicant.id"), nullable=False)
    product_name = Column(String(255), nullable=False)
    generic_name_id = Column(Integer, ForeignKey("generic_name.id"), nullable=False)
    dosage_form_id = Column(Integer, ForeignKey("dosage_form.id"), nullable=False)
    therapeutic_category_id = Column(
        Integer, ForeignKey("therapeutic_category.id"), nullable=False
    )
    color = Column(String(255), nullable=False)
    scheduling_status = Column(Text, nullable=True)
    strength = Column(String(255), nullable=False)
    administration_route_id = Column(
        Integer, ForeignKey("administration_route.id"), nullable=False
    )
    markings = Column(Text, nullable=False)
    shape = Column(Text, nullable=False)
    unit_dose = Column(String(255))
    package_size = Column(String(255), nullable=False)
    package_type = Column(String(255), nullable=False)
    created_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
    )
    updated_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
        onupdate=datetime.now,
    )
    product_variation = relationship("ProductVariation", back_populates="product")
    product_manufacturer = relationship("ProductManufacturer", back_populates="product")
    product_category = relationship("ProductCategory", back_populates="product")
    applicant = relationship("Applicant", back_populates="product")
    generic_name = relationship("GenericName", back_populates="product")
    dosage_form = relationship("DosageForm", back_populates="product")
    therapeutic_category = relationship("TherapeuticCategory", back_populates="product")
    administration_route = relationship("AdministrationRoute", back_populates="product")
    product_approval = relationship("ProductApproval", back_populates="product")
    product_licence_status = relationship(
        "ProductLicenceStatus", back_populates="product"
    )
    product_active_ingredient = relationship(
        "ProductActiveIngredient", back_populates="product"
    )

    def __repr__(self):
        return f"<product {self.id}>"


class ApprovalStage(Base):
    __tablename__ = "approval_stage"

    id = Column(Integer, primary_key=True, index=True)
    role_id = Column(Integer, ForeignKey("role.id"), nullable=False)
    stage = Column(String(255), nullable=False)
    stage_number = Column(Integer, nullable=False)
    created_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
    )
    updated_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
        onupdate=datetime.now,
    )
    role = relationship("Role", back_populates="approval_stage")
    product_approval = relationship("ProductApproval", back_populates="approval_stage")

    def __repr__(self):
        return f"<approval_stage {self.id}>"


class ProductApproval(Base):
    __tablename__ = "product_approval"

    id = Column(Integer, primary_key=True, index=True)
    product_id = Column(Integer, ForeignKey("product.id"), nullable=False)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    approval_stage_id = Column(Integer, ForeignKey("approval_stage.id"), nullable=False)
    status = Column(Integer, nullable=False)
    created_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
    )
    updated_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
        onupdate=datetime.now,
    )
    product = relationship("Product", back_populates="product_approval")
    approval_stage = relationship("ApprovalStage", back_populates="product_approval")
    user = relationship("Users", back_populates="product_approval")

    def __repr__(self):
        return f"<product_approval {self.id}>"


class ProductApprovalComment(Base):
    __tablename__ = "product_approval_comment"

    id = Column(Integer, primary_key=True, index=True)
    product_approval_id = Column(
        Integer, ForeignKey("product_approval.id"), nullable=False
    )
    comment = Column(String(255), nullable=False)
    created_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
    )
    updated_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
        onupdate=datetime.now,
    )

    def __repr__(self):
        return f"<product_approval_comment {self.id}>"


class ProductVariation(Base):
    __tablename__ = "product_variation"

    id = Column(Integer, primary_key=True, index=True)
    product_id = Column(Integer, ForeignKey("product.id"), nullable=False)
    product_category_id = Column(
        Integer, ForeignKey("product_category.id"), nullable=False
    )
    product_name = Column(String(255), nullable=False)
    generic_name_id = Column(Integer, ForeignKey("generic_name.id"), nullable=False)
    dosage_form_id = Column(Integer, ForeignKey("dosage_form.id"), nullable=False)
    therapeutic_category_id = Column(
        Integer, ForeignKey("therapeutic_category.id"), nullable=False
    )
    color = Column(String(255), nullable=False)
    shape = Column(Text, nullable=False)
    markings = Column(Text, nullable=False)
    scheduling_status = Column(Text, nullable=True)
    strength = Column(String(255), nullable=False)
    administration_route_id = Column(
        Integer, ForeignKey("administration_route.id"), nullable=False
    )
    unit_dose = Column(String(255))
    package_size = Column(String(255), nullable=False)
    package_type = Column(String(255), nullable=False)
    status = Column(Boolean, nullable=False, default=True)
    created_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
    )
    updated_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
        onupdate=datetime.now,
    )
    product = relationship("Product", back_populates="product_variation")
    product_category = relationship(
        "ProductCategory", back_populates="product_variation"
    )
    generic_name = relationship("GenericName", back_populates="product_variation")
    dosage_form = relationship("DosageForm", back_populates="product_variation")
    therapeutic_category = relationship(
        "TherapeuticCategory", back_populates="product_variation"
    )
    administration_route = relationship(
        "AdministrationRoute", back_populates="product_variation"
    )

    def __repr__(self):
        return f"<product_variation {self.id}>"


class ProductManufacturer(Base):
    __tablename__ = "product_manufacturer"

    id = Column(Integer, primary_key=True, index=True)
    product_id = Column(Integer, ForeignKey("product.id"), nullable=False)
    manufacturer_id = Column(Integer, ForeignKey("manufacturer.id"), nullable=False)
    country_id = Column(Integer, ForeignKey("country.id"), nullable=False)
    created_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
    )
    updated_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
        onupdate=datetime.now,
    )
    product = relationship("Product", back_populates="product_manufacturer")
    manufacturer = relationship("Manufacturer", back_populates="product_manufacturer")
    country = relationship("Country", back_populates="product_manufacturer")

    def __repr__(self):
        return f"<product_manufacturer {self.id}>"


class ProductActiveIngredient(Base):
    __tablename__ = "product_active_ingredient"

    id = Column(Integer, primary_key=True, index=True)
    ingredient = Column(Text, nullable=False)
    specification_number = Column(Text, nullable=False)
    product_id = Column(Integer, ForeignKey("product.id"), nullable=False)
    manufacturer_id = Column(Integer, ForeignKey("manufacturer.id"), nullable=False)
    country_id = Column(Integer, ForeignKey("country.id"), nullable=False)
    created_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
    )
    updated_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
        onupdate=datetime.now,
    )
    product = relationship("Product", back_populates="product_active_ingredient")
    manufacturer = relationship(
        "Manufacturer", back_populates="product_active_ingredient"
    )
    country = relationship("Country", back_populates="product_active_ingredient")

    def __repr__(self):
        return f"<product_active_ingredient {self.id}>"


class ProductLicenceStatus(Base):
    __tablename__ = "product_licence_status"

    id = Column(Integer, primary_key=True, index=True)
    product_id = Column(Integer, ForeignKey("product.id"), nullable=False)
    product_licence_fee_id = Column(
        Integer, ForeignKey("product_licence_fee.id"), nullable=False
    )
    entry_date = Column(DATETIME, nullable=False)
    renewal_date = Column(DATETIME, nullable=False)
    status = Column(Boolean, nullable=False, default=False)
    created_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
    )
    updated_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
        onupdate=datetime.now,
    )

    product_licence_fee = relationship(
        "ProductLicenceFee", back_populates="product_licence_status"
    )
    product = relationship("Product", back_populates="product_licence_status")

    def __repr__(self):
        return f"<product_licence_status {self.id}>"


class ProductLicenceFee(Base):
    __tablename__ = "product_licence_fee"

    id = Column(Integer, primary_key=True, index=True)
    product_license_fee = Column(DECIMAL(precision=10, scale=2), nullable=False)
    status = Column(Boolean, nullable=False, default=True)
    created_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
    )
    updated_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("current_timestamp()"),
        onupdate=datetime.now,
    )
    product_licence_status = relationship(
        "ProductLicenceStatus", back_populates="product_licence_fee"
    )

    def __repr__(self):
        return f"<product_licence_fee {self.id}>"


class UserSignature(Base):
    __tablename__ = "user_signature"

    id = Column(Integer, primary_key=True, index=True)
    file_name = Column(Text, nullable=False)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    file_size = Column(Integer, nullable=False)
    file_type = Column(Text, nullable=False)
    file_location = Column(Text, nullable=False)
    created_at = Column(
        TIMESTAMP(timezone=True), nullable=False, server_default=text("now()")
    )
    updated_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("now()"),
        onupdate=datetime.now,
    )
    users = relationship("Users", back_populates="user_signature")

    def __repr__(self):
        return f"<user_signature {self.id}"
