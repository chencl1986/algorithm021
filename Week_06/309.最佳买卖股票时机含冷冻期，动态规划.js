/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 如果价格没有两天的价格，则无法进行交易，返回0即可
  if (prices <= 1) {
    return 0;
  }

  // 创建dp数组进行递推，并且需要根据前天的结果推断当天的情况
  // 假设现在是第i天，dp[0]保存的是i - 2天买卖后的结果，dp[1]保存的是i - 1天的结果
  // dp[0][0]保存的是进行卖出操作的结果，dp[0][1]保存的是买入后的结果。
  dp = [
    // 第一天的结果
    [
      0, // 还没有买过，因此无法卖出，没有收入
      -prices[0], // 买入，支出prices[0]元
    ],
    // 第二天的结果
    // 无论进行卖出还是买入操作，第一天可能进行了买入，或者没有任何操作
    [
      Math.max(
        0, // 前一天没有操作
        prices[1] - prices[0], // 前一天买入股票，当前才可以卖出
      ),
      // 因两天同时买入，肯定比任何一天买入小，因此无需判断
      Math.max(
        -prices[0], // 第一天买入了股票
        -prices[1], // 第一天没有买入，第二天买入
      ),
    ],
  ];

  for (let i = 2; i < prices.length; i++) {
    dp = [
      dp[1], // i-1天的状态，在下次递推时会变成i-2天的状态
      [
        // 第i天的卖出状态
        Math.max(
          dp[1][0], // i-1天如果有卖出，那么今天没法卖出
          dp[1][1] + prices[i], // 只有i-1天买入，今天才可以卖出
        ),
        // 第i天的买入状态
        Math.max(
          dp[0][0] - prices[i], // i-2天如果卖出，今天才可以买入
          dp[1][1], // 如果i-1天有买入，今天无法买入
        ),
      ],
    ];
  }

  return Math.max(dp[1][0], dp[1][1]);
};
// @lc code=end
