/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
function isHappy(n: number): boolean {
  if (n === 1) return true;
  const target = new Set();
  var sum = 0;
  while (!target.has(n)) {
    target.add(n);
    while (n) {
      sum += Math.pow(n % 10, 2);
      n = Math.floor(n / 10);
    }
    if (sum == 1) {
      return true;
    }
    n = sum;
    sum = 0;
  }
  return false;
};
// @lc code=end

