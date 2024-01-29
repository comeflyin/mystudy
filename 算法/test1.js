// function A(name){
//   this.name = name;
// }


// // 基类方法
// A.prototype.sayHello = function () {
//   console.log("hello");
// }

// function B(name,age){
//   A.call(this,name)
//   this.age = age
// }

// B.prototype = Object.create(A.prototype)
// B.prototype.sayBye = function () {
//   console.log("bye");
// }

// let nb = new B('me','20')

// nb.sayHello()
// nb.sayBye()

function longestStr(str){
  let sum = 0
  let l = 0
  let len = str.length

  let map = new Map()

  for(let r = 0;r < len;r ++){
    const temp = str[r]
    if(map.has(temp) && map.get(temp) >= l){
      l = map.get(temp) + 1
    }
    map.set(temp,r)
    const nowLong = r - l + 1
    sum = Math.max(sum,nowLong)
  }

  return sum
}

const s = 'asdfgsdfghhjjkldace'
console.log(longestStr(s));