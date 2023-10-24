var twoSum = function(numbers, target) {
  let map = new Map()
  for(let i = 0;i < numbers.length;i ++){
      if(map.has(target - numbers[i])){
          return [map.get(target - numbers[i]),i + 1]
      }else{
          map.set(numbers[i],i + 1)
      }
  }
};

let numbers = [2,7,11,15], target = 9
console.log(twoSum(numbers, target));