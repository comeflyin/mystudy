function flatArray(arr){
  const res = []
  const stack = [...arr]

  while(stack.length){
    const next = stack.pop()
    if(Array.isArray(next)){
      stack.push(...next)
    }else{
      res.unshift(next)
    }
  }

  return res
}

let arr = [1,2,3,[4,5,[6,7]]]

console.log(flatArray(arr));