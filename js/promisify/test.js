// const promise1 = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log('Promise 1 resolved');
//     resolve(1);
//   }, 1000);
// });
// const promise2 = new Promise((reject) => {

//   console.log('Promise 2 rejected');
//     reject(new Error('Error!'));

// });

// const promise3 = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log('Promise 3 resolved');
//     resolve(3);
//   }, 3000);
// });

// try {
//   Promise.all([promise1, promise2, promise3])
//     .then((values) => {
//       console.log('All promises resolved:', values);
//     })
// } catch (error) {
//   console.error('At least one promise rejected:', error.message);
// }

// const result = []
// const set = new Set()
// set.add([1,2,3])
// set.forEach(item => {
//   result.push([item])
// })
// console.log(result)

// const a = [[1,3],[3,8]]
// const b = [[1,2],[2,8]]

// const result = [] // 储存结果数组
// const set = new Set(a.flat().concat(b.flat())) // 找到所有的点 flat()扁平化 concat()合并 获得所有的断点
// const arr = [...set].sort((a,b) => a-b) // 排序 set顺序不确定 转数组
// for(let i = 0; i < arr.length - 1; i++) { 
//   result.push([arr[i], arr[i+1]]) // 遍历添加区间
// }
// console.log(result);

// const a = [[1, 2], [5, 8]]
// const b = [[1, 3], [3, 8]]

// const getInterval = function (a,b) {
//   let first = 0
//   let second = 0
//   let lena = a.length
//   let lenb = b.length

//   const result = []

//   while (first < lena && second < lenb) {
//     // 并集区间左右端点
//     let start = Math.max(a[first][0], b[second][0])
//     let end = Math.min(a[first][1], b[second][1])
//     // 交集区间左右端点
//     let start1 = Math.min(a[first][0], b[second][0])
//     let end1 = Math.max(a[first][1], b[second][1])

//     if (start <= end) {
//       result.push([start, end])
//       if (start !== start1) {
//         result.push([start1, start])
//       }
//       if (end !== end1) {
//         result.push([end, end1])
//       }
//     }

//     // 判断两个区间哪个先结束
//     if (a[first][1] < b[second][1]) {
//       first++
//     } else {
//       second++
//     }
//   }

//   return result
// }

// console.log(getInterval(a,b))

function findMinCombination(nums, n) {
  // Step 1: 对数组 nums 进行排序
  nums.sort((a, b) => a - b);

  // Step 2: 初始化计数器和结果变量
  let count = 0;
  let result = null;

  // Step 3: 遍历数组 nums
  for (let i = 0; i < nums.length; i++) {
      // 对于每个元素 nums[i]
      // 计算以当前元素为最小值的排列组合数
      const combinations = getCombinations(nums.length - i - 1, count);

      // 如果当前元素满足条件，更新结果并增加计数器
      if (count + combinations >= n) {
          result = nums[i];
          count++;
      } else {
          // 如果不满足条件，增加计数器
          count += combinations;
      }
  }

  return result;
}

// 辅助函数：计算组合数
function getCombinations(n, r) {
  if (r === 0 || r === n) {
      return 1;
  } else {
      return getCombinations(n - 1, r - 1) + getCombinations(n - 1, r);
  }
}

// 示例
const nums = [1, 2];
const n = 22;
const result = findMinCombination(nums, n);
console.log(result);