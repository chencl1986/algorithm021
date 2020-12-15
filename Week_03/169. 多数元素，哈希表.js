/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];

    if (map.has(value)) {
      map.set(value, map.get(value) + 1);
    } else {
      map.set(value, 1);
    }

    if (map.get(value) >= nums.length / 2) {
      return value;
    }
  }
};
// @lc code=end
