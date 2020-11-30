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
  let arr = new Array(N + 1);

  for (let i = 0; i < arr.length; i++) {
    if (i <= 1) {
      arr[i] = i;
    } else {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
  }

  return arr[arr.length - 1];
};
// @lc code=end
