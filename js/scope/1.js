
let b = {
  1 : 3,
  0 : 1,
  a : 2
}

console.log(b[0], b[1],b[2]);

for(let s in b)
console.log(`${s}.${b[s]}`); 
