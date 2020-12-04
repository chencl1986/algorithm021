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
  let stack = [-1];

  for (let i = 0; i < heights.length; i++) {
    while (heights[stack[stack.length - 1]] > heights[i]) {
      max = Math.max(
        heights[stack.pop()] * (i - stack[stack.length - 1] - 1),
        max,
      );
    }
    stack.push(i);
  }

  while (stack.length > 1) {
    max = Math.max(
      heights[stack.pop()] * (heights.length - stack[stack.length - 1] - 1),
      max,
    );
  }

  return max;
};
// @lc code=end
