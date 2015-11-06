"use strict";

class MyArray extends Array {
  constructor() {
    super(arguments);
    this.myInstanceProp = "hey";
  }
  toString() {
    return "My Own " + super.toString();
  }
  static defaultArray() {
    return new MyArray(6, 6, 6);
  }
}

let my = MyArray.defaultArray();
console.log(my.toString());
