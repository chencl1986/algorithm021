/*
 * @lc app=leetcode.cn id=433 lang=javascript
 *
 * [433] 最小基因变化
 */

// @lc code=start
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
  let set = new Set();
  let min = Infinity;

  function dfs(str, change) {
    if (str === end) {
      min = Math.min(min, change);
      return;
    }

    for (const next of bank) {
      if (set.has(next)) {
        continue;
      }

      let count = 0;

      for (let i = 0; i < next.length; i++) {
        if (str[i] !== next[i]) {
          count++;
        }
      }

      if (count === 1) {
        set.add(next);
        dfs(next, change + 1);
        set.delete(next);
      }
    }
  }
  dfs(start, 0);

  return min === Infinity ? -1 : min;
};
// @lc code=end
