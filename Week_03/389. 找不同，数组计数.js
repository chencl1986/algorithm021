/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let count = new Array(26).fill(0);
  const base = 'a'.charCodeAt(0);

  for (const char of s) {
    count[char.charCodeAt(0) - base]++;
  }

  for (const char of t) {
    const index = char.charCodeAt(0) - base;
    count[index]--;

    if (count[index] < 0) {
      return char;
    }
  }
};
// @lc code=end
