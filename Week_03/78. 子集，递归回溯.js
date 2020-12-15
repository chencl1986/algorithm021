/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [];
  let subset = [];

  function dfs(current) {
    if (current === nums.length) {
      result.push(subset.slice());
      return;
    }

    subset.push(nums[current]);
    dfs(current + 1);
    subset.pop();
    dfs(current + 1);
  }
  dfs(0);

  return result;
};
// @lc code=end
