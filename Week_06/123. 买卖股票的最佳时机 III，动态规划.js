/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let dp = []; // 记录每一天的各种操作状态
  dp[0] = 0; // 状态0：不进行任何操作，初始为0
  dp[1] = -prices[0]; // 状态1：进行1次买入操作，支出prices[0]
  dp[2] = 0; // 状态2：进行1次卖出操作，第一次无法卖出，为0
  dp[3] = -prices[0]; // 状态3：进行第2次买入操作，初始最多只能买入一次，支出prices[0]
  dp[4] = 0; // 状态4：进行第2次卖出操作，第一次无法卖出，为8

  for (let i = 1; i < prices.length; i++) {
    dp = [
      // 状态0
      dp[0], // 每次都不做任何操作
      // 状态1
      Math.max(
        dp[0] - prices[i], // 如果之前从没有买过，当前尝试购买1次
        dp[1], // 如果之前买过1次，无法再买
      ),
      // 状态2
      Math.max(
        dp[1] + prices[i], // 如果之前买过1次，现在可以卖出
        dp[2], // 如果之前卖出过1次，现在无法再卖
      ),
      // 状态3
      Math.max(
        dp[2] - prices[i], // 如果之前卖过一次，现在可以再买
        dp[3], // 如果已经买过2次，就不可以再买了
      ),
      // 状态4
      Math.max(
        dp[3] + prices[i], // 如果之前买过2次，现在可以卖出
        dp[4], // 如果已经卖出过2次，现在无法再卖出
      ),
    ];
  }

  // 递推完成后，状态4就是卖出2次能获得的最大利润
  return dp[4];
};
// @lc code=end
