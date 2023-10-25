
var intersect = function(nums1, nums2) {
  let map = new Map()
  let ans = []
  for(let i = 0;i < nums1.length;i++){
      if(map.has(nums1[i])){
          map.set(nums1[i],map.get(nums1[i]) + 1)
      }else{
          map.set(nums1[i],1)
      }
  }
  for(let i = 0;i < nums2.length;i ++){
      if(map.has(nums2[i])){
          ans.push(nums2[i])
          if(map.get(nums2[i]) == 1){
              map.delete(nums2[i])
          }else{
                 map.set(nums2[i],map.get(nums2[i]) - 1)
          }

      }
  }
  return ans
};

