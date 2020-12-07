/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let map = new Map();

  for (const char of s) {
    map.set(char, map.has(char) ? map.get(char) + 1 : 1);
  }

  for (const char of t) {
    if (map.get(char)) {
      map.set(char, map.get(char) - 1);
    } else {
      return false;
    }
  }

  return true;
};
// @lc code=end
