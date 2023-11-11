var addBinary = function(a, b) {
  return ((BigInt('0b' + a) + BigInt('0b' + b)).toString(2))
};

// 数字太大的时候不行
var addBinary = function(a, b) {
  a = parseInt(a,2)
  b = parseInt(b,2)
  while(b !== 0){
    const temp = (a & b) << 1 // 进位缓存
    a = a ^ b // 无进位加法
    b = temp // 加上进位
  }
  return a.toString(2)
};

// 最蠢的方式
var addBinary = function(a, b) {
  var c = []
  var carry = 0
  if(a.length > b.length){
        b = '0'.repeat(a.length - b.length) + b
  }else if(a.length < b.length){
      for(var i = 0;i < b.length - a.length; i++){
        a = '0'.repeat(b.length - a.length) + a
      }
  }
  for(var i = a.length-1; i >= 0; i--){

      c[i + 1] =  parseInt(a[i]) +  parseInt(b[i]) + carry
      carry = 0
      switch(c[i + 1]){
          case 0:
              break
          case 1:
              break
          case 2:{
              c[i + 1] = 0
              carry = 1
              break
              }
          case 3:{
              c[i + 1] = 1
              carry = 1
              break
              }
      }
  }
  if(carry == 1){
      c[0] = 1
  }else{
      c.shift()
  }
  return c.join('')
};
