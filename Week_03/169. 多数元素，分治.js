/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  function countMax(left, right, max) {
    let count = 0;

    for (let i = left; i <= right; i++) {
      if (nums[i] === max) {
        count++;
      }
    }

    return count;
  }

  function divide(left, right) {
    if (left === right) {
      return nums[left];
    }

    let middle = left + Math.floor((right - left) / 2);
    let leftMax = divide(left, middle);
    let rightMax = divide(middle + 1, right);

    let leftCount = countMax(left, right, leftMax);
    let rightCount = countMax(left, right, rightMax);

    return leftCount > rightCount ? leftMax : rightMax;
  }

  return divide(0, nums.length - 1);
};
// @lc code=end
