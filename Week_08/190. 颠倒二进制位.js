/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  // https://leetcode-cn.com/problems/reverse-bits/solution/190-dian-dao-er-jin-zhi-wei-by-alexer-660/
  let result = 0; // 存储结果

  // 32位二进制数，因此需要移动32次
  // 每次将n的左后一位移动到result的第一位
  for (let i = 0; i < 32; i++) {
    result =
      // result向左移动
      (result << 1) +
      // 填入n的最后一位
      (n & 1);
    n = n >> 1; // n向右移动
  }

  // 11111111111111111111111111111101，这个Case反转后为负数，需要转换为正数
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift
  return result >>> 0;
};
// @lc code=end
