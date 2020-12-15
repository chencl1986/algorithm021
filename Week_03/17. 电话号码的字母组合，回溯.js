/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits || !digits.length) {
    return [];
  }

  let result = [];
  const map = new Map([
    ['2', 'abc'],
    ['3', 'def'],
    ['4', 'ghi'],
    ['5', 'jkl'],
    ['6', 'mno'],
    ['7', 'pqrs'],
    ['8', 'tuv'],
    ['9', 'wxyz'],
  ]);

  function dfs(str, current) {
    if (current === digits.length) {
      result.push(str);
      return;
    }

    const chars = map.get(digits[current]);

    for (let i = 0; i < chars.length; i++) {
      dfs(str + chars[i], current + 1);
    }
  }
  dfs('', 0);

  return result;
};
// @lc code=end
