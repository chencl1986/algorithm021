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

  let result = 1;
  let subRes = x;
  let pow = Math.abs(n);

  while (pow > 0) {
    if (pow % 2) {
      result *= subRes;
    }
    subRes *= subRes;
    pow = Math.floor(pow / 2);
  }

  return n < 0 ? 1 / result : result;
};
// @lc code=end
