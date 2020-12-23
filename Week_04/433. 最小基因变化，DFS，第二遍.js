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
  let min = Infinity;
  let set = new Set();

  function dfs(str, level) {
    if (str === end) {
      min = Math.min(min, level);
      return;
    }

    for (const next of bank) {
      if (set.has(next)) {
        continue;
      }

      let diff = 0;

      for (let i = 0; i < next.length; i++) {
        if (next[i] !== str[i]) {
          diff++;
        }
      }

      if (diff === 1) {
        set.add(next);
        dfs(next, level + 1);
        set.delete(next);
      }
    }
  }
  dfs(start, 0);

  return min === Infinity ? -1 : min;
};
// @lc code=end
