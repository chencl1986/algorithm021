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
  function dfs(pow) {
    if (pow === 0) {
      return 1;
    }

    if (pow % 2) {
      pow = Math.floor(pow / 2);
      const res = dfs(pow);
      return res * res * x;
    } else {
      const res = dfs(pow / 2);
      return res * res;
    }
  }

  return n < 0 ? 1 / dfs(Math.abs(n)) : dfs(n);
};
// @lc code=end
