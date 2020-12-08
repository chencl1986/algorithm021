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
  let result = 0;

  for (let i = 0; i < height.length; i++) {
    let leftMax = 0;

    for (let j = i; j >= 0; j--) {
      leftMax = Math.max(leftMax, height[j]);
    }

    let rightMax = 0;

    for (let k = i; k < height.length; k++) {
      rightMax = Math.max(rightMax, height[k]);
    }

    result += Math.min(leftMax, rightMax) - height[i];
  }

  return result;
};
// @lc code=end
