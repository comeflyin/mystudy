var multiply = function(num1, num2) {
  if(num1 === '0' || num2 === '0') return '0'

  let l1 = num1.length, l2 = num2.length, p = new Array(l1 + l2).fill(0)
  for(let i = l1;i --;){
      for(let j = l2;j --;){
          const temp = num1[i] * num2[j] + p[i + j + 1] 
          p[i + j + 1] = temp % 10
          p[i + j] += 0|temp / 10 
      }
  }
  while(p[0] === 0) p.shift()

  return p.join('')
};