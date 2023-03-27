#!/usr/bin/python3
from sqlalchemy import create_engine, MetaData, Table, Integer, String, \
    Column, DateTime, ForeignKey, Numeric
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class Post(Base):
    __tablename__ = 'posts'
    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String(100), nullable=False, default="Newspaper")
    slug = Column(String(100), nullable=False, default='help')
    content = Column(String(50), nullable=False,default="Newspaper" )
    published = Column(String(200), nullable=False, default="Newspaper", unique=True)    
    created_on = Column(DateTime(), default=datetime.now)
    updated_on = Column(DateTime(), default=datetime.now, onupdate=datetime.now)

    def __repr__ (self):
        return f"<Post 1: Post ID = {self.id}\n title = {self.title}\n slug= {self.slug}\n content= {self.content}\n \
            published = {self.published}\n created On = {self.created_on}\n Update On = {self.updated_on}>"
    
post1 = Post(title="The Nigerian Army recruitment", published="Lorrine Adefemi")
print(post1)
