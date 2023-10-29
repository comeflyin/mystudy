var reverseBetween = function(head, left, right) {
  const dummy = new ListNode(-1)
  dummy.next = head

  let lc = dummy
  //lc移动到左边切口
  for(let i = 0;i < left - 1; i ++){
    lc = lc.next
  }
  let rightList = lc
  //rc移动到右边切口 
  for(let i = 0; i < right - left + 1;i++ ){
    rightList = rightList.next
  }
  //切出链表
  let leftList = lc.next
  let rc = rightList.next
  //切断链表
  lc.next = null
  rightList.next = null
  //反转链表
  swapList(leftList)
  //连接链表
  lc.next = rightList
  leftList.next = rc
  return dummy.next
}

swapList = (head) => {
  let temp = null
  let list = head
  while(list){
    const next =  list.next
    list.next = temp
    temp = list
    list = next
  }
}