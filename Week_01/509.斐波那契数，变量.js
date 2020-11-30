/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  if (N <= 1) {
    return N;
  }
  let prev1 = 1;
  let prev2 = 0;
  let curr = 0;

  for (let i = 2; i < N + 1; i++) {
    curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }

  return curr;
};
// @lc code=end
