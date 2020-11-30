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
  digits.reverse();
  let plus = 1;

  for (let i = 0; i < digits.length; i++) {
    if (plus) {
      if (digits[i] === 9) {
        digits[i] = 0;
      } else {
        digits[i]++;
        plus = 0;
        break;
      }
    }
  }

  if (plus) {
    digits.push(1);
  }

  digits.reverse();
  return digits;
};
// @lc code=end
