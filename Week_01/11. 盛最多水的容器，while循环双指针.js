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
  let i = 0;
  let j = height.length - 1;

  while (i < j) {
    let minHeight = height[i] < height[j] ? height[i++] : height[j--];
    max = Math.max(minHeight * (j - i + 1), max);
  }

  return max;
};
// @lc code=end
