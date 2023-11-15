var vowelStrings = function(words, left, right) {
  let set = new Set(['a', 'e', 'i', 'o', 'u'])
  let sum = 0
  while(left < right){
      const wordl = words[left]
      const wordr = words[right]
      if(set.has(wordl[0]) && set.has(wordl[wordl.length - 1])){
          sum ++
      } 
      if(set.has(wordr[0]) && set.has(wordr[wordr.length - 1]))
      {
          sum ++
      } 
      left ++
      right --
  }
  if(left === right){
      const wordl = words[left]
      if(set.has(wordl[0]) && set.has(wordl[wordl.length - 1])){
          return sum + 1
      } 
 
  } 
  return sum
};

words =
["ce","ai"]

console.log(vowelStrings(words,1,1));