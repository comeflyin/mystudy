function reverseSum(k){
  const tem = + k.toString().split('').reverse().join('')
  return k + tem
}

console.log(reverseSum(123));