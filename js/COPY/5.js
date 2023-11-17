// 手动实现深拷贝
// 1. 递归
function deepClone(obj) {
  let newObj = {}
  for(let key in obj) {
    if(obj[key] instanceof Object) {
      newObj[key] = deepClone(obj[key])
    }else {
      newObj[key] = obj[key]
    }
  }
  return newObj
}
