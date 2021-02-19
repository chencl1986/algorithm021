/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 *
 * https://leetcode-cn.com/problems/house-robber/description/
 *
 * algorithms
 * Easy (47.24%)
 * Likes:    1232
 * Dislikes: 0
 * Total Accepted:    225.9K
 * Total Submissions: 478K
 * Testcase Example:  '[1,2,3,1]'
 *
 *
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 *
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 *
 *
 *
 * 示例 1：
 *
 * 输入：[1,2,3,1]
 * 输出：4
 * 解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
 * 偷窃到的最高金额 = 1 + 3 = 4 。
 *
 * 示例 2：
 *
 * 输入：[2,7,9,3,1]
 * 输出：12
 * 解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
 * 偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= nums.length <= 100
 * 0 <= nums[i] <= 400
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  /**
   * 对于第i个房子，有两种场景，偷或不偷
   * 如果不偷的话，dp[i] = dp[i - 1] + 0
   * 如果偷的话，那么i之前的所有的可能情况，也就是dp[i] = Math.max(nums[i] + dp[i - 2], nums[i] + dp[i - 3], ...)
   * 如此可知dp[i] = Math.max(dp[i - 1] + 0, nums[i] + dp[i - 2], nums[i] + dp[i - 3], ...)，如此可知，每一位都取了之前所有可能的最大值
   * 那么就可以推导出dp[i - 2] > dp[i - 3] > dp[i - 4]...，因此dp[i - 2]之后的对比都可以省略，递推公式就变成了
   * dp[i] = Math.max(dp[i - 1] + 0, nums[i] + dp[i - 2])
   */
  // 由于要向前递推两层，一次初始化时要创建两个元素，并且都要取最大值
  let dp = [
    // 偷了第0户
    nums[0] || 0,
    // 第0和1户只能选一户偷
    Math.max(nums[0] || 0, nums[1] || 0),
  ];

  // 从第2户开始递推
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(
      // 如果不偷第i户，只需考虑i-1户的情况
      dp[i - 1],
      // 如果偷第i户，需要考虑i-2到0户的情况，而i-2必然大于之前所有结果，此处只需要考虑i-2即可
      nums[i] + dp[i - 2],
    );
  }

  // 递推到最后一个值,就是最大偷到的金额
  return dp[dp.length - 1];
};
// @lc code=end
