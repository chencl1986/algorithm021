/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let x0 = x; // 缓存每次迭代的结果，从x开始迭代

  // 用Math.floor将x0*x0向下取整
  // 避免例如TestCase: 5，会出现x0 * x0=5.000000000000001，造成死循环
  while (Math.floor(x0 * x0) > x) {
    // 套用分析得到的迭代公式，不断迭代
    // 当迭代结束时，得到的就是最接近结果的值
    x0 = (x0 + x / x0) / 2;
  }

  // 将结果的整数部分返回
  return Math.floor(x0);
};
// @lc code=end
