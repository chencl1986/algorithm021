/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let newDigits = (BigInt(digits.join('')) + 1n).toString().split('');
  while (digits.length - newDigits.length > 0) {
    newDigits.unshift(0);
  }
  return newDigits;
};
// @lc code=end
