var deleteNode = function(node) {
  node.val = node.next.val // 实际删除了node.next
  node.next  = node.next.next
};