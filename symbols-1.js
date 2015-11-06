var privateProp = Symbol("myPrivate");

var obj = {
  normalMethod : function(){ return "normal" },
  [privateProp]: function(){ return "symbol" }
}

console.log(Object.keys(obj));
// [ 'normalMethod' ]

console.log(Object.getOwnPropertySymbols(obj));
// [ Symbol(myPrivate) ]

console.log(obj[privateProp]());
// symbol
