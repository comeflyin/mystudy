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

// 双指针
var getIntersectionNode = function(headA, headB) {
    let pa = headA
    let pb = headB
    if(pa == null || pb == null){
        return null
    }
    while(pa != pb){
        
        
        if(pa == null){
            pa = headB
        }else(
            pa = pa.next
        )
        if(pb == null){
            pb = headA
        }else{
            pb = pb.next
        }
    }
    return pa
};