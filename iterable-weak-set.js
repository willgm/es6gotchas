var myWSet = new WeakSet(),
    myObj = { abc: 123 };

myWSet
  .add(myObj)
  .add(myObj)
  .add({});

console.log(myWSet.size);
// undefined

console.log(myWSet.has(myObj));
// true

for(i of myWSet)
  console.log(i);
  // Throw Error
