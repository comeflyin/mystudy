var rotateRight = function(head, k) {
  if(k === 0 || !head || !head.next){
      return head
  }
  let list = head
  let n = 1 // 计录链表长度
  while(list.next){
      list = list.next
      n ++
  }

  let move = n - k % n // 移动n - k % n 找到旋转后的尾节点

  if(move === n){ // 相当于没有移动
      return head
  }

  list.next = head // 闭合链环
  while(move){
     list = list.next
     move -- 
  }
  const ans = list.next // 答案的头结点为list的next
  list.next = null // 断开节点
  return ans
};