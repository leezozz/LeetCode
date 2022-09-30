/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start



// 思路：参数大于0的情况下，501计算得到它的翻转数字105，判断501 === 105
function isPalindrome(x: number): any {

  var y = x
  var xReversed = 0

  while (x > 0) {
    
    // 翻转的数字
    xReversed = x % 10 + xReversed * 10
    console.log('xReversed', xReversed)

    x = Math.floor(x/10)
    console.log('x', x)
    
  }

  return xReversed === y

};

// @lc code=end

