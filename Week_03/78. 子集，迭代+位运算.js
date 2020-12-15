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

  for (let i = 0; i < 1 << nums.length; i++) {
    let subset = [];

    for (let j = 0; j < nums.length; j++) {
      if (i & (1 << j)) {
        subset.push(nums[j]);
      }
    }

    result.push(subset);
  }

  return result;
};
// @lc code=end
