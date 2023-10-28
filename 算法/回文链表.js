var isPalindrome = function(head) {
  let a = []
  let i = 0
  let list = head
  while(list != null){
      a[i ++] = list.val
      list = list.next
  }
  let l = 0
  let r = a.length - 1
  while(l < r){
      if(a[l] !== a[r]){
          return false
      }
      l++
      r--
  }
  return true
};