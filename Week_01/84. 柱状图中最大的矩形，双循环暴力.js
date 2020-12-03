/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let max = 0;

  for (let i = 0; i < heights.length; i++) {
    let minHeight = heights[i];

    for (let j = i; j < heights.length; j++) {
      minHeight = Math.min(minHeight, heights[j]);
      max = Math.max((j - i + 1) * minHeight, max);
    }
  }

  return max;
};
// @lc code=end
