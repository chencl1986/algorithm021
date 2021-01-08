/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
/* 
2\n[3,2,6,5,0,3]
2\n[]
0\n[1,3]
*/
  // 最多进行k次交易，交易有买入和卖出两种状态，因此递推k*2种情况
  // 偶数位置是买入状态，奇数位置是卖出状态
  // 实际上第一次交易时，买入为-prices[0]，卖出为0（因为还没有买过，就无法卖出）
  // 将递推状态都初始化为-prices[0]，从prices[0]开始递推，就会自然创建出第一次交易的状态
  let dp = new Array(k << 1).fill(-prices[0]);

  // 按每天的价格进行递推
  for (let i = 0; i < prices.length; i++) {
    // 递推每次交易的价格
    for (let j = 0; j < dp.length; j++) {
      // 当前价格是根据上一次交易的结果推出
      dp[j] = Math.max(
        dp[j], // 如果这次交易没有收益，不进行交易，保持原样
        // 在j-1，即上一次交易的基础上，进行当次交易
        // j为0时，表示第一次交易，它的前一次无交易，为0
        (dp[j - 1] || 0) +
          // 偶数位置是买入状态，奇数位置是卖出状态，进行相应交易
          (j & 1 ? prices[i] : -prices[i]),
      );
    }
    // 也可以完全按照上一次递推的状态，推导下一次的状态，两者结果相同
    /* dp = dp.map((val, j) => {
      return Math.max(
        dp[j],
        (dp[j - 1] || 0) + (j & 1 ? prices[i] : -prices[i]),
      );
    }); */
  }

  // 卖出次数最多，就会拿到最多利润
  // 遇到2\n[]和0\n[1,3]这两个case，会无法正确递推，此时利润都为0
  return dp[dp.length - 1] || 0;
};
