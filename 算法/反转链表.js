var reverseList = function(head) {
  let back = null
  let temp = head
  while(temp){
      const next = temp.next //记录下一个节点
      temp.next = back //先让temp的下一个为back
      back = temp //再令back = temp 此时back.next = 原来的back而此时的back为 temp
      temp = next //temp后移
  }
  return back
};