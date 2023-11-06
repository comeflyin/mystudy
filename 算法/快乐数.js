
// 快慢指针 空间小
const getNext = (n) => n.toString().split('').map(i => i**2).reduce((a,b) => a + b)
var isHappy = function(n) {
    let show = n
    let fast = getNext(n)
    while(fast !== 1 && fast !== show){
        show = getNext(show)
        fast = getNext(getNext(fast)) // 快指针一次走两步
    }
    return fast === 1
};


// 使用set 空间大
var isHappy = function(n) {
   let set = new Set()
   while(n !== 1 && !set.has(n)){
       set.add(n)
       n = getNext(n)
   }
   return n === 1
};