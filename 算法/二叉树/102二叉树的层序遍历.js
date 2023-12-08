var levelOrder = function(root) {
  if(!root) return []
  let ans = []
  let queue = [root]
  let count = 0
  while(queue.length){
      count = queue.lenth
      ans.push(lever(count))
  }

  function lever(count){
      let tem = []
       while(count){
          let node = queue.shift()
          tem.push(node.val)
          if (node.left) queue.push(node.left)
          if (node.right) queue.push(node.right)
          count --
      }
      return tem
  }
  return ans
};