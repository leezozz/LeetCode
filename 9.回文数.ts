/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start

// 把数字转换为字符转去解决的方法
// function isPalindrome(x: number): boolean {
//   const newArg: any = x.toString().split('')

//   if(x < 0) return false

//   var result = newArg.every((item, index) => {
//     //   console.log('item', typeof item, item)
//     // console.log('-----', typeof newArg.slice(newArg.length - index - 1, newArg.length - index)[0],
//     //   newArg.slice(newArg.length - index - 1, newArg.length - index)[0]
//     // )
//     return item === newArg.slice(newArg.length-index-1, newArg.length-index)[0]
//   })

//   return result
// };


//  12.3-12=0.3000000000000007
// x = 56789
// y = 0
// var numDigits =0
// while(x >= 1){
//   x=x/10;
//   console.log('---', x)
//    numDigits++;
//   y = (x - parseInt(x)) * 10
//     console.log('$$', x, parseInt(x))
//     console.log('++', x - parseInt(x))
//   console.log('y', y, Math.round(y))
// }
// console.log(numDigits);



function isPalindrome(x: number): any {

  if (x < 0) return false

  // 获取整数是多少位数的
  var numDigits = 0
  var args = x
	while(args>= 1){
    args=args/10;
    numDigits++;
	}
	console.log(numDigits);

  var target = false

  for(var i = 1; i <= numDigits; i++){
    console.log('i', i)

    // d: 余数
    var d = x % 10
    var newArg = x / (Math.pow(10, (numDigits - i)))
    // e: 当i = 1时，e就是第一位数字
    var e = parseInt(newArg.toString())
    x = parseInt((x/10).toString())
    console.log('--', x, d)

    if (x > 10) {
      // i=1时，判断倒数i位和第i位是否相等；以此类推
      var target = d === e ? true : false
      console.log('target', target)
    } 
    if (!target) break
    
  }

  return target

};

// @lc code=end

