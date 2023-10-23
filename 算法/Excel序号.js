var titleToNumber = function(columnTitle) {
  let key = new Map()
  for(let i = 0; i < 26;i ++ ){
      key.set(String.fromCharCode(i + 'A'.charCodeAt(0)),i + 1)
  }
  let sum = 0
  let j =1
  for(let i =  columnTitle.length - 1;i >= 0;i --){
      sum += key.get(columnTitle[i]) * j
      j *= 26
  }  
  return sum
};

let columnTitle = "AB"
console.log(titleToNumber(columnTitle));