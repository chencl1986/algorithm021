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
let map = new Map();
var climbStairs = function (n) {
  if (n <= 1) {
    return 1;
  }

  if (map.has(n)) {
    return map.get(n);
  }
  const sum = climbStairs(n - 1) + climbStairs(n - 2);
  map.set(n, sum);

  return sum;
};
// @lc code=end
