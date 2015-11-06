"use strict";
var methods = [];

for(let i = 0; i < 10; i++){
  methods[i] = function() {
    console.log('let = ', i);
  };
}

methods[5]() // let = 5
