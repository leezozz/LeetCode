/*
 * @lc app=leetcode.cn id=509 lang=typescript
 *
 * [509] 斐波那契数
 */

// @lc code=start
function fib(n: number): number {
  
  // 方法一：递归 【费时、时间复杂度O(2n)， 空间复杂度O(1)】
  const getSum = (n: number): number => {
    if (n <= 1) {
      return n
    }
    return getSum(n - 1) + getSum(n - 2)
  }
  return getSum(n)


  // 方法二：动态规划 【时间复杂度O(n)，空间复杂度O(1)】
  // if (n <= 1) {
  //   return n
  // }
  // let pre = 0, cur = 1, sum
  // for (let i = 2; i <= n; i++) {
  //   sum = pre + cur
  //   pre = cur
  //   cur = sum
  // }
  // return sum


  // 方法三：缓存 【时间复杂度O(n), 空间复杂度O(1)】
  // if (n <= 1) {
  //   return n
  // }
  // let cache = [0, 1]
  // for (let i = 2; i <= n; i++) {
  //   cache[i] = cache[i-2] + cache[i-1]
  // }
  // return cache[n]

};
// @lc code=end

