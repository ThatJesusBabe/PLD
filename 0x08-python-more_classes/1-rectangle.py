#!/usr/bin/python3

class Rectangle:
    """To initialize class properties
    Args:
        width
        height

    """
    def __init__(self, width=0, height=0):
        self.width = width
        self.height = height

    """The getter, to retrieve the width attribute of the class"""
    @property
    def width(self):
        return self.__width

    """The setter, to set the value for the width attribute"""
    @width.setter
    def width(self, value):
        if not isinstance(value, int):
            raise TypeError("width must be integer")
        if value < 0:
            raise ValueError("width must be >= 0")
        self.__width = value

    """The getter, to retrieve the height attribute of the class"""
    @property
    def height(self): 
        return self.__height

    """The getter, to set the value for the height attribute of the class"""
    @height.setter
    def height(self, value):
        if not isinstance(value, int):
            raise ValueError("height must be >= 0")
        if value < 0:
            raise TypeError("height must be an integer")
        self.__height = value
