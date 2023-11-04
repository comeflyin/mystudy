var oddEvenList = function(head) {
  if(head === null){
      return  head
  }

  let before = head
  let after = head.next
  let temp = after
  while(temp !== null && temp.next !== null){
      before.next = temp.next
      before = before.next
      temp.next = before.next
      temp = temp.next
  }

  before.next = after
  return head
};