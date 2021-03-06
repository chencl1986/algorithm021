/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let result = [];

  function dfs(str, left, right) {
    if (left === n && right === n) {
      result.push(str);
      return;
    }

    if (left < n) {
      dfs(str + '(', left + 1, right);
    }
    if (right < left) {
      dfs(str + ')', left, right + 1);
    }
  }
  dfs('', 0, 0);

  return result;
};
// @lc code=end
