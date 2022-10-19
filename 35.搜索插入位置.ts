/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  // // 不存在数组中：找到大于他的元素索引，返回该索引；没有大于他的元素，就返回数组的长度（即，数组最后索引+1）
  // var res = nums.findIndex(item => item > target) === -1 ? nums.length : nums.findIndex(item => item > target)
  // // 判断是否存在数组里，存在的话去找到它的索引
  // return nums.includes(target) ? nums.indexOf(target) : res


  // for循环，效率低
  // var res = 0
  // for(var i = 0; i <= nums.length; i++) {
  //   // console.log('---', i)
  //   if(nums[i] === target) {
  //       res = i
  //       break
  //   }

  //   if(nums[i] > target) {
  //       res = i
  //       break
  //   }
  //   res = nums.length
  // }
  // return res

  // if(nums.length === 0) return -1

  // var lowIndex = 0
  // var height = nums.length - 1
  // while (lowIndex <= height) {
  //   var midIndex = Math.floor((lowIndex + height) / 2)
  //   console.log('midIndex', midIndex)
    
    
  //   if (target >= nums[midIndex]) {
  //     if (nums[midIndex + 1] > target || midIndex === nums.length-1) {
  //       return midIndex+1
  //     } 
  //     // 否则低位下标为中位下标加1
  //     lowIndex = midIndex + 1
  //   } else {
  //     height = midIndex - 1
  //   }

  // }
  // return -1



    let left = 0;
    let right = nums.length - 1;
    let mid = 0
    while (left <= right) {
      mid = Math.floor((right - left)/2 + left);
      if (nums[mid] === target) {
          return mid;
      } else if (nums[mid] < target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
    }
    return left;

};
// @lc code=end

