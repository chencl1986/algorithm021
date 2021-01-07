/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/description/
 *
 * algorithms
 * Easy (55.01%)
 * Likes:    1243
 * Dislikes: 0
 * Total Accepted:    299.3K
 * Total Submissions: 543.9K
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 *
 * 如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。
 *
 * 注意：你不能在买入股票前卖出股票。
 *
 *
 *
 * 示例 1:
 *
 * 输入: [7,1,5,3,6,4]
 * 输出: 5
 * 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 * ⁠    注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
 *
 *
 * 示例 2:
 *
 * 输入: [7,6,4,3,1]
 * 输出: 0
 * 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 使用一个数组进行递推
  // 0位置保存的是当前的最大利润，1位置保存的是当前的
  let dp = [0, prices[0]];

  // 从1开始遍历prices进行递推
  for (let i = 1; i < prices.length; i++) {
    dp = [
      // 到i为止产生的最大利润，是i之前产生的最大利润，与当前卖出的最大利润中的较大者
      Math.max(dp[0], prices[i] - dp[1]),
      // 到i为止已知的最小价格，是i之前已知的最小价格，与当前价格之间的较小者
      Math.min(dp[1], prices[i]),
    ];
  }

  // 0位置保存的就是遍历所有价格之后能够产生的最大利润
  return dp[0];
};
// @lc code=end
