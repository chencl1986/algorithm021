/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return '';
  }

  let len = Math.min(...strs.map((str) => str.length));
  let result = '';

  outer: for (let i = 0; i < len; i++) {
    let str = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== str) {
        break outer;
      }
    }

    result += str;
  }

  return result;
};
// @lc code=end
