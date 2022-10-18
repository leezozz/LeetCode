/*
 * @lc app=leetcode.cn id=136 lang=typescript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  // console.log('nums', nums, nums.length)

    // 使用异或运算 
    for(var i = 1; i < nums.length; i++) {
      nums[0] ^= nums[i]
      // console.log('res', nums[0])
    }
  
    return nums[0]
};
// @lc code=end

