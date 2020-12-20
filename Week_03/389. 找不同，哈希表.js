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
  let map = new Map();

  for (const char of s) {
    map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
  }

  for (const char of t) {
    if (map.has(char)) {
      map.set(char, map.get(char) - 1);

      if (map.get(char) === -1) {
        return char;
      }
    } else {
      return char;
    }
  }
};
// @lc code=end
