/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  dp = [
    0, // 此处保存的是当前完成卖出交易后，赚到的利润最大值，开始时没有交易，因此为0
    -prices[0], // 此处保存的是当前完成买入交易后，赚到的利润最大值，开始时买入股票，因此为负
  ];

  for (let i = 1; i < prices.length; i++) {
    dp = [
      // 计算当前卖出后的最大利润
      Math.max(
        dp[0], // 如果上一次已卖出，这次没有股票可卖
        dp[1] + prices[i] - fee, // 如果上次有买入，那么这次就按当前价格卖出，获得收益，只有卖出才需要手续费
      ),
      // 计算当前买入后的最大利润
      Math.max(
        dp[1], // 上次已经买过，这次没必要再买，否则会损失收益
        dp[0] - prices[i], // 如果上次卖出过，这次就买入，等待下次卖出机会
      ),
    ];
  }

  // 最后一次操作后，取最终利润的最大值
  return Math.max(...dp);
};
// @lc code=end
