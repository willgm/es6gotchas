var s = new Set();
s.add("hello").add("goodbye").add("hello");
console.log(s.size);
console.log(s.has("hello"));

for(i of s) console.log(i);
