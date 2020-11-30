/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.get(nums[i]).push(i);
    } else {
      map.set(nums[i], [i]);
    }
  }

  nums.sort((a, b) => a - b);

  for (let i = 0, j = nums.length - 1; i < j; ) {
    const sum = nums[i] + nums[j];
    if (sum < target) {
      i++;
    } else if (sum > target) {
      j--;
    } else {
      return [map.get(nums[i]).shift(), map.get(nums[j]).shift()];
    }
  }
};
// @lc code=end
