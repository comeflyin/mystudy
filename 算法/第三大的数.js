var thirdMax = function(nums) {  
  let first = -Infinity;  
  let second = -Infinity;  
  let third = -Infinity;  
  let set = new Set(nums);  

  for (let num of set) {  
      if (num > first) {  
          third = second;  
          second = first;  
          first = num;  
      } else if (num > second && num < first) {  
          third = second;  
          second = num;  
      } else if (num > third && num < second) {  
          third = num;  
      }  
  }  

  return third === -Infinity ? first : third;  
}; 