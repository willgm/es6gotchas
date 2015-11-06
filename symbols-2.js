"use strict";

var obj = {
  [Symbol.iterator]: function*(){
    yield 1;
    yield 2;
    yield 3;
  }
}

for(let i of obj) console.log(i);
// 1
// 2
// 3
