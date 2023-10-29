var partition = function(head, x) {
  let large = new ListNode(0)
  let small = new ListNode(0)
  let hlarge = large
  let hsmall = small
  while(head !== null){
      if(head.val < x){
          small.next = head
          small = small.next
      }else{
          large.next = head 
          large = large.next
      }
      head = head.next
  }
  large.next = null /*large.next可能指向一个小于
  x的节点，不指向null会导致链表出现环*/
  small.next = hlarge.next
  return hsmall.next
};  