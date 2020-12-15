/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let result = [];
  let subset = [];
  let used = new Array(n + 1).fill(false);

  function dfs(current) {
    if (subset.length === k) {
      result.push(subset.slice());
      return;
    }

    for (let i = current; i < used.length; i++) {
      if (used[i]) {
        continue;
      }

      subset.push(i);
      used[i] = true;
      dfs(i);
      subset.pop();
      used[i] = false;
    }
  }
  dfs(1);

  return result;
};
// @lc code=end
