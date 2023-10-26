var hasCycle = function(head) {
  let map = new Map()
  let list = head
  
  while(list !== null){
      if(map.has(list)){
          return true
      }else{
          map.set(list,1)
      }
      list = list.next
  }

  return false
};