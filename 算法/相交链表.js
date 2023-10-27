var getIntersectionNode = function(headA, headB) {
  let map = new Map()

  while(headA !== null){
      map.set(headA,1)
      headA = headA.next
  }
  while(headB !== null){
      if(map.has(headB)){
          return headB
      }
      headB = headB.next
  }
  return null
};