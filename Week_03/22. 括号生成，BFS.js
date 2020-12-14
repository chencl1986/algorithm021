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
  let queue = [['(', 1, 0]];
  let result = [];

  while (queue.length) {
    let len = queue.length;

    while (--len >= 0) {
      const item = queue.shift();

      if (item[1] < n) {
        let newItem = item.slice();
        newItem[0] += '(';
        newItem[1]++;
        queue.push(newItem);
      }
      if (item[2] < item[1]) {
        let newItem = item.slice();
        newItem[0] += ')';
        newItem[2]++;
        if (newItem[2] === n) {
          result.push(newItem[0]);
        } else {
          queue.push(newItem);
        }
      }
    }
  }

  return result;
};
// @lc code=end
