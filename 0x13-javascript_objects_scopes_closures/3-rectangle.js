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
  };

  print() {
    let i = 0;
    while (i < this.height) {
      let letter = console.log('X'.repeat(this.width));
      i++;
    } 
  }
}
let go = new Rectangle(3, 3);
console.log(go);
module.exports = Rectangle;
