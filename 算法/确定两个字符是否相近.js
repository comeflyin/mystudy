var closeStrings = function(word1, word2) {
  const tem1 = new Array(26).fill(0),tem2 = new Array(26).fill(0);
  [...word1].forEach(char => tem1[char.charCodeAt() - 97] ++);
  [...word2].forEach(char => tem2[char.charCodeAt() - 97] ++);
  for(let i = 0;i < 26;i ++){
      if(tem1[i] > 0 && tem2[i] == 0 || tem1[i] == 0 && tem2[i] > 0) return false
  }
  tem1.sort()
  tem2.sort()
  return tem1.toString() == tem2.toString()
};