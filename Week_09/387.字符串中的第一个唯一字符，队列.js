/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let queue = [];
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (!map.has(char) || map.get(char) === 1) {
      queue.push([char, i]);
    }
    map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
    while (queue.length && map.get(queue[0][0]) > 1) {
      queue.shift();
    }
  }

  return queue[0] ? queue[0][1] : -1;
};
// @lc code=end
