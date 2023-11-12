var originalDigits = function(s) {
  let map = new Map()
  for(const ch of s){
      map.set(ch,(map.get(ch)||0) + 1) // js中逻辑或的返回值为操作数中的第一个被解释为 true 的值，如果都是 false 或者 undefined，则返回最后一个操作数。
  }

  const temp = new Array(10).fill(0) // 存放十个数字的数量
  temp[0] = map.get('z') || 0
  temp[2] = map.get('w') || 0 
  temp[4] = map.get('u') || 0
  temp[6] = map.get('x') || 0
  temp[8] = map.get('g') || 0

  temp[3] = (map.get('h') || 0) - temp[8]
  temp[5] = (map.get('f') || 0) - temp[4]
  temp[7] = (map.get('s') || 0) - temp[6]

  temp[1] = (map.get('o') || 0) - temp[0] - temp[2] -temp [4]
  temp[9] = (map.get('i') || 0) - temp[5] - temp[6] -temp [8]

  const ans = []
  for(let i = 0; i < 10; i++){
      while(temp[i] != 0){
          ans.push(i)
          temp[i] --
      }
  }
  return ans.join('')
};