/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let prev1 = 1;
  let prev2 = 1;
  let curr = 1;

  for (let i = 2; i < n + 1; i++) {
    curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }

  return curr;
};
// @lc code=end
