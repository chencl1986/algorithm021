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
  let max = nums[0];
  // 存储子数组的最大乘积，默认为第一项
  // 由于乘积可能会出现负负得正的情况，因此需要同时存储最大和最小值
  // 这样能避免只存储最大值，导致负值被抛弃的情况
  // 但实际上prevMin和prevMax都可能存在负值
  let prevMin = max;
  let prevMax = max;

  // 遍历数组，计算最大乘积
  for (let i = 1; i < nums.length; i++) {
    // 对于nums[i]来说，它一定会被计算到乘积中，但它之前已知的乘积是可以被抛弃的
    // 假设上一步的最大值和最小值需要使用，分别计算当前的最大和最小乘积
    const currMin = prevMin * nums[i];
    const currMax = prevMax * nums[i];

    // 将currMin和currMax与当前值对比，找出i位置的真正最大和最小值，存入数组
    prevMin = Math.min(currMin, currMax, nums[i]);
    prevMax = Math.max(currMin, currMax, nums[i]);

    // 不断对比当前最大值，即可找出整个数组中的最大乘积
    max = Math.max(max, prevMax);
  }

  return max;
};
// @lc code=end
