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
  let arr = [];
  let plus = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + plus;
    if (sum === 10) {
      arr.push(0);
    } else {
      arr.push(sum);
      plus = 0;
    }
  }

  if (plus) {
    arr.push(1);
  }

  arr.reverse();

  return arr;
};
// @lc code=end
