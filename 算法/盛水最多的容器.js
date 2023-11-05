var maxArea = function(height) {
  let l = 0
  let r = height.length - 1
  let res = 0
  while(l < r){
      res = Math.max(res,Math.min(height[l],height[r]) * (r - l))
      if(height[l] < height[r]){
          l ++
      }else{
          r --
      }
  }
  return res
};