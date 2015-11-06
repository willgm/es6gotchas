"use strict";
var methods = [];

for(var i = 0; i < 10; i++){
  methods[i] = function() {
    console.log('var = ', i);
  };
}

methods[5]() // var = 10
