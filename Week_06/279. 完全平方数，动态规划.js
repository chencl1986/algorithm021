/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  // 该题类似于[322. 零钱兑换](https://leetcode-cn.com/problems/coin-change/)
  // 只是硬币不是固定金额
  // 需要计算到n，因此需要从0开始递推到n
  // 由于要计算的是最小值，因此初始化为Infinity，避免计算错误
  let dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0; // 0对应的可组合数字为0

  // 从1开始才会有组合个数，一直递推到n
  for (let i = 1; i < dp.length; i++) {
    // 每次计算可用的完全平方数
    // 判断可用的方法是j*j不超过当前数量i
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(
        dp[i], // 当前已储存了之前完全平方数的组合数量
        // 当前的完全平方数数量，可由i - j * j加一个j * j而来
        // 因此等于dp[i - j * j]的数量加1个j * j
        dp[i - j * j] + 1,
      );
    }
  }

  // 递推到n时，就计算出了所有可能的数量
  return dp[n];
};
// @lc code=end
