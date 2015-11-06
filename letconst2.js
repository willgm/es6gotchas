"use strict";

const c = {};

c.myNewAtt = 123;
console.log('myconst = ', c);
//myconst = { myNewAtt: 123 }

c = 123;
//TypeError: Assignment to constant variable.
