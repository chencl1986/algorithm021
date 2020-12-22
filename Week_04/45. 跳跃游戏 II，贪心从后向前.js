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
  let target = nums.length - 1;
  let step = 0;

  while (target > 0) {
    for (let i = 0; i < target; i++) {
      if (i + nums[i] >= target) {
        target = i;
        step++;
        break;
      }
    }
  }

  return step;
};
// @lc code=end
