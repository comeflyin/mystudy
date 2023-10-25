var intersection = function(nums1, nums2) {
  let map1 = new Map()
  let ans = []
  let key = 0
  for(let i = 0;i < nums1.length;i++){
      if(!map1.has[nums1[i]]){
          map1.set(nums1[i],1)
      }
  }
  for(let i = 0; i <nums2.length;i++){
      if(map1.has(nums2[i])){
          ans[key] = nums2[i]
          key ++
          map1.delete(nums2[i])
      }
  }
  return ans
};

