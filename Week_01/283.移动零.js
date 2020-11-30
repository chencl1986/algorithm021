/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */
// @lc code=start
/**
 * @param {number[]} numbers
 * @return {void} Do not return anything, modify numbers in-place instead.
 */
var moveZeroes = function (numbers) {
  let moveIndex = 0;

  numbers.forEach((value, index) => {
    if (value !== 0) {
      if (moveIndex !== index) {
        numbers[moveIndex] = value;
        numbers[index] = 0;
      }
      moveIndex++;
    }
  });
};
// @lc code=end
