/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let step = 0;
  let target = 0;
  let max = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, i + nums[i]);

    if (target === i) {
      target = max;
      step++;

      if (target >= nums.length - 1) {
        break;
      }
    }
  }

  return step;
};
// @lc code=end
