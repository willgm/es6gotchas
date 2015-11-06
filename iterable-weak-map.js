var myWMap = new WeakMap(),
    myObj = { abc: 123 };

myWMap
  .set(myObj, 42)
  .set(myObj, 34)
  .set({}, "value");

console.log(myWMap.size);
// undefined

console.log(myWMap.get(myObj));
// 34

for(i of myWMap)
  console.log(i);
  // Throw Error
