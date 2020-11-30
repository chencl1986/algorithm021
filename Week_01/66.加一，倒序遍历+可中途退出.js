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
  let plus = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (plus) {
      if (++digits[i] === 10) {
        digits[i] = 0;
      } else {
        plus = 0;
        break;
      }
    }
  }

  if (plus) {
    digits.unshift(1);
  }

  return digits;
};
// @lc code=end
