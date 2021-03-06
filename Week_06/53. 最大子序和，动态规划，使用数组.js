/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (53.00%)
 * Likes:    2778
 * Dislikes: 0
 * Total Accepted:    391.6K
 * Total Submissions: 738.8K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *
 * 示例:
 *
 * 输入: [-2,1,-3,4,-1,2,1,-5,4]
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 *
 *
 * 进阶:
 *
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0]; // 第一个值即为最初的最大值

  // 由于需要判断上一个子序和是否需要取用，因此从1开始遍历数组，避免出现i为-1的问题
  // 此处复用了nums来存储每个位置的最大子序和，因此直接遍历nums即可
  for (let i = 1; i < nums.length; i++) {
    // 对于第i个数来说，nums[i]一定会被加入新的子序和中
    // 因此只需要判断nums[i]加上之前最大的子序和，是否比不加上更大即可
    nums[i] = Math.max(
      // 假设之前的子序和需要被使用
      nums[i] + nums[i - 1],
      // 假设之前的子序和需要废弃，则为0
      nums[i] + 0,
    );
    // 每一位产生的最大子序和都被存储在原位置，因此需要同步比对找出所有子序和中的最大值
    max = Math.max(max, nums[i]);
  }

  return max;
};
// @lc code=end
