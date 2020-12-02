/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let moveIndex = 0;

  nums.forEach((value, index) => {
    if (value !== nums[moveIndex]) {
      nums[++moveIndex] = value;
    }
  });

  return moveIndex + 1;
};
// @lc code=end
