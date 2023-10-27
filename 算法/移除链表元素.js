var removeElements = function(head, val) {
  if(head === null) return head
  head.next = removeElements(head.next,val)
  if(head.val === val){
      return head.next
  }else return head
};