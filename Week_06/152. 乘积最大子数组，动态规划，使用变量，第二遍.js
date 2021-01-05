/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 *
 * https://leetcode-cn.com/problems/maximum-product-subarray/description/
 *
 * algorithms
 * Medium (40.78%)
 * Likes:    883
 * Dislikes: 0
 * Total Accepted:    110.4K
 * Total Submissions: 270.7K
 * Testcase Example:  '[2,3,-2,4]'
 *
 * 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
 *
 *
 *
 * 示例 1:
 *
 * 输入: [2,3,-2,4]
 * 输出: 6
 * 解释: 子数组 [2,3] 有最大乘积 6。
 *
 *
 * 示例 2:
 *
 * 输入: [-2,0,-1]
 * 输出: 0
 * 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let prevMin = nums[0];
  let prevMax = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let currMin = prevMin * nums[i];
    let currMax = prevMax * nums[i];

    prevMin = Math.min(currMin, currMax, nums[i]);
    prevMax = Math.max(currMin, currMax, nums[i]);
    max = Math.max(prevMax, max);
  }

  return max;
};
// @lc code=end
