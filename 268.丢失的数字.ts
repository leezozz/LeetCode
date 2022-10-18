/*
 * @lc app=leetcode.cn id=268 lang=typescript
 *
 * [268] 丢失的数字
 */

// @lc code=start
function missingNumber(nums: number[]): number {
  var res = 0
  for (var i = 0; i < nums.length; i++) {
    res ^= nums[i] ^= i
  }
  res ^= nums.length
  // console.log('最后的', res)
  return res
};
// @lc code=end

