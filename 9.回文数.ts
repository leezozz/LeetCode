/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start

// 把数字转换为字符转去解决的方法
function isPalindrome(x: number): boolean {
  const newArg: any = x.toString().split('')

  if(x < 0) return false

  var result = newArg.every((item, index) => {
    //   console.log('item', typeof item, item)
    // console.log('-----', typeof newArg.slice(newArg.length - index - 1, newArg.length - index)[0],
    //   newArg.slice(newArg.length - index - 1, newArg.length - index)[0]
    // )
    return item === newArg.slice(newArg.length-index-1, newArg.length-index)[0]
  })

  return result
};


// function isPalindrome(x: number): boolean {

// };
// @lc code=end

