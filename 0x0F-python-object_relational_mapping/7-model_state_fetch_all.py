#!/usr/bin/python3
"""
   List all objects instances of a the 
   State table in database

"""

from model_state import Base, State
from sqlalchemy import (create_engine)
from sqlalchemy.orm import sessionmaker
import sys

if __name__ == "__main__":
    engine = create_engine('mysql+mysqldb://{}:{}@localhost/{}'.format(sys.argv[1], sys.argv[2], sys.argv[3]), pool_pre_ping=True)

    Session = sessionmaker(bind=engine)
    session = Session()

    list_state = session.query(State).order_by(State.id)
    for state in list_state:
        print("{}: {}".format(state.id, state.name))
