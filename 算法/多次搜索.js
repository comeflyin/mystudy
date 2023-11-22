// 超时
var multiSearch = function(big, smalls) {
  let ans = []
  for(const str of smalls){
      ans.push(search(big,str))
  }
  return ans
};

let search = function(big,str){
  const map = new Map()
  const tem = []
  const window = []
  map.set(str,1)
  for(let i = 0;i < big.length; i ++){
      window.push(big[i])
      if(window.length === str.length){
          if(map.has(window.join(''))){
              tem.push(i)
          }
          window.shift()
      }
  }
  return tem
}

const big =
"mississippi"

smalls =
["is","ppi","hi","sis","i","ssippi"]

console.log(multiSearch(big,smalls));


// 同思路优化

var multiSearch = function(big, smalls) {
  let res = [];

 for (let i = 0; i < smalls.length; i++) {
     res[i] = [];

     const cur = smalls[i];
     if (!cur) continue;
     const l = cur.length;

     for (j = 0; j <= big.length-l; j++) {
         const cs = big.slice(j, j + l);
         if (cs === cur) {
             res[i].push(j);
         }
     }
 }
 return res;
};