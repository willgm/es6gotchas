"use strict";

let foo = {
  x: 666,
  normal: function(){ console.log(this.x, arguments) },
  arrow: () => console.log(this.x, arguments)
}

foo.normal(1, 2) // 666, { '0': 1, '1': 2 }

foo.normal.bind({x: 69})(2, 1) // 69, { '0': 2, '1': 1 }

foo.normal.call({x: 69}, 2, 1) // 69, { '0': 2, '1': 1 }

foo.arrow(1, 2) // undefined, undefined

foo.arrow.bind({x: 69})(2, 1) // undefined, undefined

foo.arrow.call({x: 69}, 2, 1) // undefined, undefined

//BONUS:
foo.normal.bind({x:69}).bind({x:999})(123) // ???

console.log(foo.normal.prototype); // {}

console.log(new foo.normal); // {}

console.log(foo.arrow.prototype); // undefined

console.log(new foo.arrow);
// TypeError: () => console.log(this.x, arguments) is not a constructor
