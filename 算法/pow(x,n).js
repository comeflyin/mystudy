var myPow = function(x, n) {
  if(n === 0){
      return 1
  }else if(n < 0){
      return  1 / myPow(x, -n)
  }else if(n % 2 === 0){ // 优化
      const half = myPow(x, n / 2)
      return half * half
  }else{
       return x * myPow(x,n - 1)
  } 
};