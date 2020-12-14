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

  function judge(str) {
    let count = 0;

    for (const char of str) {
      if (char === '(') {
        count++;
      } else {
        if (!count) {
          return false;
        }
        count--;
      }
    }

    return !count;
  }

  function dfs(str) {
    if (str.length === n * 2) {
      if (judge(str)) {
        result.push(str);
      }
      return;
    }

    dfs(str + '(');
    dfs(str + ')');
  }
  dfs('');

  return result;
};
// @lc code=end
