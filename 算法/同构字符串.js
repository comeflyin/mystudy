var isIsomorphic = function(s, t) {
  let maps = new Map()
  let mapt = new Map()
  
  for(let i = 0; i < s.length; i ++){
      const S = s[i]
      const T = t[i]
      
      if(mapt.has(S) && mapt.get(S) != T || maps.has(T) && maps.get(T) != S){
        return false
      }
      mapt.set(S,T)
      maps.set(T,S)
  }
  return true
};

let s = "egg"
let t = "add"
console.log(isIsomorphic(s,t));

