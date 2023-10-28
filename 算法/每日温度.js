var dailyTemperatures = function(temperatures) {
  const len = temperatures.length
  const stack = []
  const res = new Array(len).fill(0)
  for(let i = 0;i < len; i++){
    //存在打破递减趋势的温度
      while(stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]){
          const top = stack.pop()
        //   if(temperatures[i] <= temperatures[top]){
        //       break
        //   }
         
          res[top] = i - top
      }

      stack.push(i)
  }
};