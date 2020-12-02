/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = -Infinity;

  for (let i = 0, j = height.length - 1; i < j; ) {
    max = Math.max(
      max,
      (height[i] < height[j] ? height[i++] : height[j--]) * (j - i + 1),
    );
  }

  return max;
};
// @lc code=end
