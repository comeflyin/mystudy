let arr = ['a', 'b', 'c', 'd', 'e']
for(let item of arr){
  console.log(item)
}

let obj = {
  name: '阿伟',
  age: '18',
  like: {
    type: 'coding'
  },
  a: undefined,
  b: null,
  c: function(){},
  d: {
    n: 100
  },
  e: Symbol('hello')
}

obj.c = obj.d
obj.d.m = obj.c

// let data = Object.create(obj)
// data.sex = 'boy'

// for(let key in obj){
//   if(data.hasOwnProperty(key)){
//   console.log(key)
//   // console.log(obj[key])
//   }
// }

// function shalldowCopy(obj){
//   let objCopy = {}
//   // if(obj instanceof Array){
//   //   objCopy = []
//   // }

//   if(typeof obj !== 'object' || obj === null) return 

//   for(let key in obj){
//     if(obj.hasOwnProperty(key)){
//       objCopy[key] = obj[key] 
//     }
//   }
//   return objCopy
// }


// let newObj = shalldowCopy(obj)

let newObj = JSON.parse(JSON.stringify(obj))