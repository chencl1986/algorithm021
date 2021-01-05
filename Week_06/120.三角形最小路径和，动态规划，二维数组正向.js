/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i][j] =
        Math.min(
          triangle[i - 1][j] === undefined ? Infinity : triangle[i - 1][j],
          triangle[i - 1][j - 1] === undefined
            ? Infinity
            : triangle[i - 1][j - 1],
        ) + triangle[i][j];
    }
  }

  return triangle[triangle.length - 1].reduce((prev, curr) => {
    return Math.min(prev, curr);
  }, Infinity);
};
// @lc code=end
