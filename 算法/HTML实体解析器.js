var entityParser = function(text) {
  const map = {
      '&quot;':'"',
      '&apos;':"'",
      '&amp;':'&',
      '&gt;':'>',
      '&lt;':'<',
      '&frasl;':'/'
      
  }

  let ans = ''
  for(let i = 0;i < text.length;i ++){
      if(text[i] == '&'){
          let str = ''
          while(text[i] != ';' && i < text.length){
              if(text[i]=='&'){
                  ans += str
                  str = '&'
                  i ++
              }else{
                  str += text[i]
                  i ++
              } 
          }
          if(i >= text.length) return ans + str
          str += ';'
          if(map[str]){
          ans += map[str]
          }else{
              ans += str
          }
      }else ans += text[i]
      
  }
  return ans
};

text =
"&&&"
console.log(entityParser(text));