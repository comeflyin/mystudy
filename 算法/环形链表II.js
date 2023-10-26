var detectCycle = function(head) {
  let map = new Map()
  let list = head
  while(list !== null){
      if(map.has(list)){
          return list
      }else{
          map.set(list,1)
      }
      list = list.next
  }
  return null
};