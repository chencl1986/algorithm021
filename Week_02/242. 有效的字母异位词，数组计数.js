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

  let arr = new Array(26).fill(0);
  const baseIndex = 'a'.codePointAt(0);

  for (const char of s) {
    const index = char.codePointAt(0) - baseIndex;
    arr[index] ? arr[index]++ : (arr[index] = 0);
  }

  for (const char of t) {
    const index = char.codePointAt(0) - baseIndex;

    if (!arr[index]) {
      return false;
    }

    arr[index]--;
  }

  return true;
};
// @lc code=end
