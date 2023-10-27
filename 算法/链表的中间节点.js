var middleNode = function(head) {
  let i = 0
  let list = head
  while(list != null){
      i ++
      list = list.next
  }
  let mid = Math.trunc(i/2)
  list = head
  while(mid--){
      list = list.next
  }
  return list
};