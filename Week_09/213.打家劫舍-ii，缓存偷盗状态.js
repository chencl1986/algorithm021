/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 *
 * https://leetcode-cn.com/problems/house-robber-ii/description/
 *
 * algorithms
 * Medium (40.74%)
 * Likes:    465
 * Dislikes: 0
 * Total Accepted:    75.1K
 * Total Submissions: 184.2K
 * Testcase Example:  '[2,3,2]'
 *
 * 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈
 * ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。
 *
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，能够偷窃到的最高金额。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [2,3,2]
 * 输出：3
 * 解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1,2,3,1]
 * 输出：4
 * 解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
 * 偷窃到的最高金额 = 1 + 3 = 4 。
 *
 * 示例 3：
 *
 *
 * 输入：nums = [0]
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 0
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // 用dp1递推从0偷到nums.length-2，初始值是第0户偷与不偷的状态
  let dp1 = [[nums[0] || 0, 0]];

  // 从1开始递推到nums.length-2
  for (let i = 1; i < nums.length - 1; i++) {
    dp1[i] = [
      // 如果偷当前人家，那么上一户人家就不能偷，只能取不偷的值
      dp1[i - 1][1] + nums[i],
      // 如果不偷当前人家，上一户人家偷不偷都可以，只需要取一个最大值
      Math.max(dp1[i - 1][0], dp1[i - 1][1]),
    ];
  }

  // 用dp2递推从1偷到nums.length-1，初始值是第1户偷与不偷的状态
  // 为保证dp2索引和nums能一一对应，dp2[0]存储一个空数组占位
  let dp2 = [[], [nums[1] || 0, 0]];

  // 从0开始递推到nums.length-1
  for (let i = 2; i < nums.length; i++) {
    dp2[i] = [
      // 如果偷当前人家，那么上一户人家就不能偷，只能取不偷的值
      dp2[i - 1][1] + nums[i],
      // 如果不偷当前人家，上一户人家偷不偷都可以，只需要取一个最大值
      Math.max(dp2[i - 1][0], dp2[i - 1][1]),
    ];
  }

  // 两次递推结果的最大值，就是最终结果
  return Math.max(...dp1[dp1.length - 1], ...dp2[dp2.length - 1]);
};
// @lc code=end
