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
  let max = [nums[0]]; // 递推nums每个值能产生的最大子序和，nums[0]的最大子序和是它自身

  // 从1开始递推
  for (let i = 1; i < nums.length; i++) {
    // 子数组至少包含一个元素，因此只需要考虑nums[i]在子数组中的情况
    // nums[i]所在的子数组，可能包含它之前和之后的元素。而之后的元素会在后续的遍历中计算，此处无需判断
    // 对于nums[i]来说，存在两种情况，它可能包含于之前的子数组，或者从自己开始重新生成一个子数组
    max[i] = Math.max(
      // nums[i]包含于之前的子数组中，上一次的子序和与nums[i]之和为新的子序和
      max[i - 1] + nums[i],
      // nums[i]不包含于之前的子数组，上一次的子序和为0，nums[i]自己就是新的子序和
      0 + nums[i],
    );
  }

  // 每个位置都会产生一个子序和，最终结果是其中最大者
  return Math.max(...max);
};
// @lc code=end
