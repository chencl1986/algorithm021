/*
 * @lc app=leetcode.cn id=709 lang=javascript
 *
 * [709] 转换成小写字母
 */

// @lc code=start
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);

    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(code + 32);
    } else {
      result += str[i];
    }
  }

  return result;
};
// @lc code=end
