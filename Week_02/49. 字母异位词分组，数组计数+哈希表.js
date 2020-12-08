/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();
  const baseIndex = 'a'.codePointAt(0);

  for (const str of strs) {
    let arr = new Array(26).fill(0);

    for (const char of str) {
      const index = char.codePointAt(0) - baseIndex;

      arr[index]++;
    }

    const key = JSON.stringify(arr);

    map.has(key) ? map.get(key).push(str) : map.set(key, [str]);
  }

  return [...map.values()];
};
// @lc code=end
