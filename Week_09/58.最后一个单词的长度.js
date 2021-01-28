/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let count = 0;
  let lastSpace = true;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ' && lastSpace) {
      continue;
    }
    if (s[i] !== ' ') {
      count++;
      lastSpace = false;
    } else {
      break;
    }
  }

  return count;
};
// @lc code=end
