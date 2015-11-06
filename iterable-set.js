var mySet = new Set();

mySet
  .add("hello")
  .add("hello")
  .add(123);

console.log(mySet.size);
// 2

console.log(mySet.has("hello"));
// true

for(i of mySet)
  console.log(i);
  // hello
  // 123
