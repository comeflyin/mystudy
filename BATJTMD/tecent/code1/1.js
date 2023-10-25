// console.log("Hello World");
/** 
* @func 返回固定格式的电话号码  (123) 456-7890
* @param Array [1,2,3,4,5,6,7,8,9,0]
* @return (123) 456-7890  
* @author  jser
*/ 
// 函数定义
// function phoneNumber(numbers){
//   // let ans = ''
//   // for(let i = 0;i < numbers.length;i++){
//   //     if(i == 0){
//   //         ans += '('
//   //     }else if(i == 3){
//   //         ans += ') '
//   //     }else if(i == 6){
//   //         ans += '-'
//   //     }
//   //     ans += numbers[i]
//   // }
//   // // console.log(ans);
//   // return ans

//   return `(${ numbers.slice(0,3).join('')})${numbers.slice(3,6).join('')}-${numbers.slice(6).join('')}`
// }

// es6箭头函数
// 对象 函数也是对象
// 变量的类型由值决定
let phoneNumber // 弱定义 undefined null 值为空 
// 函数表达式
// 简版的函数 箭头函数
// 字符串模板 ``  ${} 换行会导致输出的内容换行，空格也会保留
// phoneNumber = (numbers) => `(${ numbers.slice(0,3).join('')})
// ${numbers.slice(3,6).join('')}-${numbers.slice(6).join('')}`

// phoneNumber = (numbers) => '(' + numbers[0] + numbers[1] + numbers[2] + ')'+ numbers[3] 
// + numbers[4] + numbers[5] + '-' + numbers[6]+ numbers[7] + numbers[8] + numbers[9]

// console.log(phoneNumber([1,2,3,4,5,6,7,8,9,0]))
