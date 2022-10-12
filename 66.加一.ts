/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
// function plusOne(digits: number[]): number[] {

  // TODO 有个问题：超大数计算会出问题【超出2的35次方-1】

  // var resArr: number[] = []
  // var res: any = 0
  // digits.forEach((item: number, index: number) => {
  //   console.log('item', item, index)
  //   res += item * Math.pow(10, (digits.length - index -1))
  // })

  // res = res + 1
  // console.log('res', res)

  
  // var yushu = 0
  // while (res >= 1) {
  //   console.log('后来的', res)
  //   yushu = res % 10
  //   console.log('余数', yushu)
  //   res = parseInt((res/10) as any)
  //   resArr.push(yushu)
  //   console.log('-----', resArr)
  // }
  
  // console.log('最后的结果', resArr.reverse())

  // return resArr.reverse()
// };


// 思路，先给最后一位+1，翻转这个数组，然后遍历数组：if(item === 10){} 并且下一位存在，下一位+1
// function plusOne(digits: number[]): number[] { 
//   var res: number[] = []

//   digits[digits.length - 1] = digits[digits.length - 1] + 1

//   digits.reverse().forEach((item, index) => {
//     if(item === 10) {
//       res.push(0) 
//        if(digits[index+1]) {
//         digits[index+1] = digits[index+1] + 1    
//        } 
//     } else {
//       res.push(item)
//     }
//   })
//   if (res.reverse() && res[0] === 0) {
//     res.unshift(1)
//   }

//  return res

// }


// 不循环的方法
function plusOne(digits: number[]): number[] {
  for (var i = digits.length - 1; i >= 0; i--) {
    if(digits[i]+1 <= 9) {
      digits[i] = digits[i] + 1
      break
    }
    digits[i] = 0

    if(!digits[0]) {
        digits.unshift(1)
    }
  }

  return digits
}


// @lc code=end

