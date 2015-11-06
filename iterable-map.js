var myMap = new Map();

myMap
  .set("hello", 42)
  .set("hello", 34)
  .set(123, "value");

console.log(myMap.size);
// 2

console.log(myMap.get("hello"));
// 34

for(i of myMap)
  console.log(i);
  // [ 'hello', 34 ]
  // [ 123, 'value' ]
