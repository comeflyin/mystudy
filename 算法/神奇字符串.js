var magicalString = function(n) {
  if (n < 4) {
      return 1
  }
  let s = [1,2,2]
  let i = 2
  let sum = 0

  while(s.length < n){
      if(s[i] == 2){ 
          s.push(3 - s[s.length - 1])//最后一个s的相反|3 - 1| = 2 
          //|3 - 2| = 1
          s.push(3 - s[s.length - 2])
      }else{
          s.push(3 - s[s.length - 1])
      }
      i ++
  }
  if(s.length > n){
      s.pop()
  }
  s.forEach((e) => {
      if(e == 1)
      sum ++
  })
  return sum
};





console.log(magicalString(4));