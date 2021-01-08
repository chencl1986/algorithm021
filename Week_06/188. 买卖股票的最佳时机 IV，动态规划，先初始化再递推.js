/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  let dp = [0]; // 0位置表示当前没有进行交易

  // 初始化第一次交易的情况
  for (let i = 0; i < k * 2; i++) {
    // 奇数位置为买入，第一次买入需要支出prices[0]
    // 偶数位置为卖出，由于没有买入过股票，没法卖出，为0
    dp.push(i % 2 ? 0 : -prices[0]);
  }

  // 从第二次交易开始递推
  for (let i = 1; i < prices.length; i++) {
    // 递推每一次交易后的状态
    dp = dp.map((value, j) => {
      if (j === 0) {
        // 0位置表示一直都没有交易过
        return dp[j];
      } else if (j % 2 === 1) {
        // 奇数位置是买入操作
        return Math.max(
          // 如果上一次有卖出，这次可以买入
          dp[j - 1] - prices[i],
          // 如果这次交易没有收益，不进行交易，保持原样
          dp[j],
        );
      } else {
        // 偶数位置是卖出操作
        return Math.max(
          // 如果上次买入过，这次可以卖出
          dp[j - 1] + prices[i],
          // 如果这次交易没有收益，不进行交易，保持原样
          dp[j],
        );
      }
    });
  }

  // 进行最多次卖出，会获得最多利润，直接返回即可
  return dp[dp.length - 1];
};
