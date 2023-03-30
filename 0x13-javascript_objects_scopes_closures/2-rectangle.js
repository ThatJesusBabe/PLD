#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
  if (isNaN(w) || isNaN(h)) {
      this;
    } else if ((w <= 0) || (h <= 0)){
      this;
    } else {
      this.width = w;
      this.height = h;
    }
  }
}
module.exports = Rectangle;
