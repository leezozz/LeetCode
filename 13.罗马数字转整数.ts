/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start



function romanToInt(s: string): number {
  var mapList = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  var res = 0

  for (var i = 0; i < s.length; i++) { 
    var number = mapList[s[i]]
    if ( number < mapList[s[i + 1]]) {
      res -= number
    } else {
      res += number
    }
  }

  return res
};
// @lc code=end

