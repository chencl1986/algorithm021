/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // 兑换的金额是amount，因此需要从0开始递推到amount
  // 由于要计算的是最小值，因此初始化为Infinity，避免计算错误
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0; // 金额为0时，硬币数为0

  // 从1开始才会累计硬币个数
  for (let i = 1; i < dp.length; i++) {
    // 需要计算各种硬币的组合情况
    for (const coin of coins) {
      // 向前查找硬币的使用情况，需要至少保证金额大于0
      if (i - coin >= 0) {
        // 如果要凑成当前金额，例如11，它可能的是由10+1，9+2，6+5组合而成
        dp[i] = Math.min(
          dp[i], // 表示已存储了之前所有硬币组合的最小值
          // 表示当前硬币组合的硬币个数
          // 当前硬币个数，是由金额i - coin加上一个coin硬币而来
          // 因此数量就是dp[i - coin]的硬币数加1
          dp[i - coin] + 1,
        );
      }
    }
  }

  // 如果硬币无法凑成所需金额，就会出现从amount向前查找任意硬币金额都只能找到Infinity的情况
  // 因此最后一位必然还是Infinity
  return dp[amount] === Infinity ? -1 : dp[amount];
};
// @lc code=end
