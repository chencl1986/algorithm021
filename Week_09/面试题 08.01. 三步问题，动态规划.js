/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function (n) {
  const step = [1, 2, 3];
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    for (let j = 0; j < step.length; j++) {
      dp[i] += dp[i - step[j]];
    }
    dp[i] %= 1000000007;
  }

  return dp[n];
};
