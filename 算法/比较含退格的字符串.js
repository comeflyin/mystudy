var backspaceCompare = function(s, t) {
  const s1 = input(s)
  const t1 = input(t)
  return s1 == t1 ? true : false
};

const input = function(str){
  let str1 = []
  for(let i = 0;i < str.length;i ++){
      if(str[i] == '#'){
          str1.pop() 
          continue
      }    
      str1.push(str[i])
  }
  return str1.join('')
} 

