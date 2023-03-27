#!/usr/bin/python3

from sqlalchemy import create_engine, MetaData, Table, Integer, String, Column 
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class State(Base):
    __tablename__ = "states"
    id = Column("id", Integer, primary_key=True, unique=True, autoincrement=True)
    name = Column("name", String(128), nullable=False)
