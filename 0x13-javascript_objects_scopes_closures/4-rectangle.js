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

  rotate () {
    let num = this.width;
    let num2 = this.height;
    this.width = num2;
    this.height = num;
    let i = 0;
    console.log(this.width, this.height);
    while (i < this.height) {
      let letter = console.log('X'.repeat(this.width));
      i++;
    }
  }

  double () {
    let dob = this.width * 2;
    let dob2 = this.height * 2;
    let i = 0;
    console.log(dob, dob2);
    while (i < dob) {
      let letter = console.log('X'.repeat(dob2));
      i++;
    }
  }
}

module.exports = Rectangle;
