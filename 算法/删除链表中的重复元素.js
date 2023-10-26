var deleteDuplicates = function(head) {
  let temp = new ListNode()
  temp.next = head
  let list = temp

  while (list.next !== null && list.next.next !== null) {
      if (list.next.val === list.next.next.val) {
          let duplicateValue = list.next.val;
          while (list.next !== null && list.next.val === duplicateValue) {
              list.next = list.next.next;
          }
      } else {
          list = list.next;
      }
  }
  
  return temp.next
};