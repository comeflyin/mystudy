var closeStrings = function(word1, word2) {
  const tem1 = new Array(26).fill(0),temp2 = new Array(26).fill(0);
  [...word1].forEach(char => tem1[char.charCodeAt() - 97] ++);
  [...word2].forEach(char => temp2[char.charCodeAt() - 97] ++);
  
};