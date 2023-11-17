var minNumber = function(nums1, nums2) {
  let n1 = Math.min(...nums1)
  let n2 = Math.min(...nums2)
  let set1 = new Set(nums1)
  let same = 10
  for(let i = 0; i < nums2.length; i ++){
      if(set1.has(nums2[i])){
          same = same < nums2[i] ? same : nums2[i]
          if(same <= n1 && same <= n2) return same
      }
  }
  if(same != 10) return same
  return n1 > n2 ? n2*10 + n1 : n1*10 + n2
};