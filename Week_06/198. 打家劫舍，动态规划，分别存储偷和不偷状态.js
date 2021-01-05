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
  // 对于第一户人家，存在偷和不偷两种情况
  // 需要注意nums为[]的情况，此时偷的情况也为0
  let dp = [[0, nums[0] || 0]];

  // 判断每一户人家的偷和不偷状态，不断累加偷到的金额
  for (let i = 1; i < nums.length; i++) {
    dp.push([]); // 存入一个空数组用于递推
    // 如果不偷当前人家，就只需要在上一个人家的偷和不偷状态中取一个最大值
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]);
    // 如果偷当前人家，那么上一个人家就不能偷，只能去不偷的值
    dp[i][1] = dp[i - 1][0] + nums[i];
  }

  // 数组最后一位，分别存储了偷和不偷最后一户的总金额，取最大值即可
  return Math.max(...dp[dp.length - 1]);
};
// @lc code=end
