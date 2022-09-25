/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start

var nums = [2, 7, 11, 15]
var target = 9

function twoSum(nums: number[], target: number): number[] {

  var sum1
  var sum2
  nums.forEach((item, index) => {

  console.log('item', item, index)
    // 求数组中任意两个数之和(元素不能重复)
    nums.forEach((curItem, curIndex) => {
      console.log('curItem', curItem, curIndex)
      
      if (index === curIndex) return
      if(item + curItem === 9) {
          console.log('+', item + curItem)
          sum1 = index 
          sum2 = curIndex

          return 
          }
      })
  })

  return [sum1, sum2]
};
// @lc code=end

twoSum(nums, target)