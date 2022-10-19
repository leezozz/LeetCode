/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
// 爬到第 n 级台阶的方法个数等于爬到 n - 1 的方法个数和爬到 n - 2 的方法个数之和
function climbStairs(n: number): number {
  
  if (n <= 2) {
    return n
  } 

  const arr: number[] = []
  arr[1] = 1
  arr[2] = 2
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }

  return arr[n]
};
// @lc code=end

