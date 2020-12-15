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
  let result = [[]];

  for (let i = 0; i < nums.length; i++) {
    const resultLength = result.length;

    for (let j = 0; j < resultLength; j++) {
      result.push([...result[j], nums[i]]);
    }
  }

  return result;
};
// @lc code=end
