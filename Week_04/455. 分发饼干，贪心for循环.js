/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  s.sort((a, b) => a - b);
  g.sort((a, b) => a - b);
  let i = 0;

  for (let j = 0; j < s.length; j++) {
    if (s[j] >= g[i]) {
      i++;
    }
  }

  return i;
};
// @lc code=end
