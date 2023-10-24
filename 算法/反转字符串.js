var reverseWords = function(s) {
  let sstr = s.split(/\s+/).filter(word => word !== ''); //filter拆分字符串
  let dstr = []
  for(let i = sstr.length - 1; i >= 0; i --){
      dstr.push(sstr[i])
  }
   // 处理前导空格
  while (dstr[0] === '') {
      dstr.shift();
  }

  // 处理尾随空格
  while (dstr[dstr.length - 1] === '') {
      dstr.pop();
  }

  return dstr.join(' ');
};
const input = "example   good a";
const result = reverseWords(input);
console.log(result);