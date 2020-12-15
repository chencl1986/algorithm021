/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];
  let used = new Array(nums.length).fill(false);
  let permutation = [];

  function dfs() {
    if (permutation.length === nums.length) {
      result.push(permutation.slice());
      return;
    }

    for (let i = 0; i < used.length; i++) {
      if (used[i]) {
        continue;
      }

      permutation.push(nums[i]);
      used[i] = true;
      dfs();
      permutation.pop();
      used[i] = false;
    }
  }
  dfs(0);

  return result;
};
// @lc code=end
