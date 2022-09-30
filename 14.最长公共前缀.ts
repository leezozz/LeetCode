/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {

  // var arr: any = []

  var str = ''
  
  // 遍历strs第一个元素的长度
  for(var i = 0; i < strs[0].length; i++) {
      
      var count = 0
      // 遍历strs的几个元素
      for(var r = 0; r < strs.length; r++) {
      var temp: any = strs[0][i]
      console.log('每次的', i, temp)
      console.log('滴滴++', r+1, strs[r + 1])
        if(strs[r + 1] && temp === strs[r+1][i]) {
            count++
        } 
      }
    
    if (count === strs.length - 1) {
      str += temp
    } else {
      return str
    }
  }

  return str
};
// @lc code=end

