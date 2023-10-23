var countSeniors = function(details) {
  let ans = 0
  let age = []
  for(let i = 0;i < details.length; i ++){
      age[0] = details[i][11]
      age[1] = details[i][12]
      if(parseInt(age.join('')) > 60) ans ++
  }
  return ans
};
 
let details = ["1313579440F2036","2921522980M5644"]
console.log( countSeniors(details));