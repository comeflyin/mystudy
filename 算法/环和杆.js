var countPoints = function(rings) {
  const getColor = (color) => {
      if(color === 'R'){
          return 0
      }else if(color === 'G'){
          return 1
      }else{
          return 2
      }
  }

  let state = new Array(10).fill(0).map(() => new Array(3).fill(0))
  for(let i = 0;i < rings.length;i += 2){
      let color = rings[i]
      let index = rings[i + 1] - '0' // 转整数
      state[index][getColor(color)] = 1 // 得到一个新颜色就变成1
  }
  let ans = 0
  for(let i = 0;i < 10;i ++){
      let bool = true
      for(let j = 0;j < 3;j ++){
          if(state[i][j] === 0){
              bool = false
              break
          }
      }
      if(bool === true){
      ans ++
      }
  }
  return ans
};