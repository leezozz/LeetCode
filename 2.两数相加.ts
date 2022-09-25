/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */


// TODO注意：这里不是数组，是链表

// var l1 = [2, 4, 3]
// var l2 = [5, 6, 4] 
 


function addTwoNumbers(l1: any | null, l2: any | null): any | null {

  // arg [ 2, 4, 3 ]  --->  342
const singleSum = (arg: any): any => {
  // console.log('arg', arg.length )
  var count = 0
  arg.forEach((item: any, index: any) => {
      count += item * (10 ** index)
  })
  
  // console.log('count', count)
  return count
}

  console.log(Array.isArray(l1), Array.isArray(l2))
  var targetFinally = singleSum(l1) + singleSum(l2)
  console.log('最后的', targetFinally)

  var targetFinallyArr: any = []

  var stringTarget = targetFinally.toString()
  for(var i = 0; i < stringTarget.length; i++) {
      console.log('i', i)

    // console.log('---', Number(stringTarget.slice(i, i + 1)))
    
    targetFinallyArr.push(Number(stringTarget.slice(i, i + 1)))
  }
  // console.log('最后的------', targetFinallyArr.reverse())
  return targetFinallyArr.reverse()
};


// @lc code=end

// addTwoNumbers(l1, l2)
