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
let map = new Map();
var fib = function (N) {
  if (N <= 1) {
    return N;
  }

  if (map.has(N)) {
    return map.get(N);
  }

  const sum = fib(N - 1) + fib(N - 2);
  map.set(N, sum);
  return sum;
};
// @lc code=end
