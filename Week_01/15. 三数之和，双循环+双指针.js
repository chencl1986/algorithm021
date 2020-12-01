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
    if (nums[i] > 0) {
      break;
    }
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    const target = 0 - nums[i];

    for (let j = i + 1, k = nums.length - 1; j < k; ) {
      if (result.length) {
        const last = result.length - 1;

        if (
          result[last][0] === nums[i] &&
          result[last][1] === nums[j] &&
          result[last][2] === nums[k]
        ) {
          continue;
        }
      }

      const sum = nums[j] + nums[k];

      if (sum < target) {
        j++;
        while (nums[j] === nums[j - 1]) {
          j++;
        }
      }

      if (sum > target) {
        k--;
        while (nums[k] === nums[k + 1]) {
          k--;
        }
      }

      if (sum === target) {
        result.push([nums[i], nums[j], nums[k]]);
        j++;
        while (nums[j] === nums[j - 1]) {
          j++;
        }
        k--;
        while (nums[k] === nums[k + 1]) {
          k--;
        }
      }
    }
  }

  return result;
};
// @lc code=end
