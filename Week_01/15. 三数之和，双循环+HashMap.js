/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    let target = 0 - nums[i];
    let map = new Map();

    for (let j = i + 1; j < nums.length; j++) {
      if (map.has(nums[j])) {
        if (result.length) {
          const last = result.length - 1;

          if (
            result[last][1] === map.get(nums[j]) &&
            result[last][2] === nums[j]
          ) {
            continue;
          }
        }

        result.push([nums[i], map.get(nums[j]), nums[j]]);
      }

      map.set(target - nums[j], nums[j]);
    }
  }

  return result;
};
// @lc code=end
