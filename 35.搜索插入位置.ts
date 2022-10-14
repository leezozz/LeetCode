/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  // 不存在数组中：找到大于他的元素索引，返回该索引；没有大于他的元素，就返回数组的长度（即，数组最后索引+1）
  var res = nums.findIndex(item => item > target) === -1 ? nums.length : nums.findIndex(item => item > target)
  // 判断是否存在数组里，存在的话去找到它的索引
  return nums.includes(target) ? nums.indexOf(target) : res
};
// @lc code=end

