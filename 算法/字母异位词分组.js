var groupAnagrams = function(strs) {
  let map = new Map()

  for(let i = 0;i < strs.length;i ++){
      let array = Array.from(strs[i])
      array.sort()
      let key = array.toString()
      let list = map.get(key) ? map.get(key) : new Array()
      list.push(strs[i])
      map.set(key,list)
  }
  return Array.from(map.values())
};