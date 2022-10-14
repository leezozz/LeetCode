/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
    // 优秀参考：
    let stack: any = [];
    let obj: any = {
        "(":")",
        "{":"}",
        "[":"]"
    };
    //取出字符串中的括号
    for(let i=0; i<s.length; i++){
        if(s[i]==="(" || s[i]==="{" || s[i]==="["){
            //如果是左括号则入栈
            stack.push(s[i]);
        }else{
            var key: any = stack.pop();
            //如果栈顶元素不相同则返回 false
            if(obj[key] !== s[i]) return false;
        }
    }
 
    if(!stack.length) return true;
    return false;


};
// @lc code=end

