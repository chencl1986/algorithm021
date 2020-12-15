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
    result.push(subset.slice());

    for (let i = current; i < nums.length; i++) {
      subset.push(nums[i]);
      dfs(i + 1);
      subset.pop();
    }
  }
  dfs(0);

  return result;
};
// @lc code=end
