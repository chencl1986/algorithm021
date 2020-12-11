/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let sum = 0;
  let left = 1;
  let leftMax = height[0];
  let right = height.length - 2;
  let rightMax = height[height.length - 1];

  while (left <= right) {
    if (leftMax < rightMax) {
      leftMax = Math.max(leftMax, height[left]);
      sum += leftMax - height[left++];
    } else {
      rightMax = Math.max(rightMax, height[right]);
      sum += rightMax - height[right--];
    }
  }

  return sum;
};
// @lc code=end
