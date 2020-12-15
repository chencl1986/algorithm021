/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (x === 0 || x === 1) {
    return x;
  }
  if (x === -1) {
    return n % 2 ? -1 : 1;
  }
  if (x === -0x7fffffff) {
    return 0;
  }

  let result = 1;
  const pow = Math.abs(n);

  for (let i = 0; i < pow; i++) {
    result *= x;
  }

  return n < 0 ? 1 / result : result;
};
// @lc code=end
