/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 *
 * https://leetcode-cn.com/problems/counting-bits/description/
 *
 * algorithms
 * Medium (76.45%)
 * Likes:    484
 * Dislikes: 0
 * Total Accepted:    67.7K
 * Total Submissions: 88.5K
 * Testcase Example:  '2'
 *
 * 给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。
 *
 * 示例 1:
 *
 * 输入: 2
 * 输出: [0,1,1]
 *
 * 示例 2:
 *
 * 输入: 5
 * 输出: [0,1,1,2,1,2]
 *
 * 进阶:
 *
 *
 * 给出时间复杂度为O(n*sizeof(integer))的解答非常容易。但你可以在线性时间O(n)内用一趟扫描做到吗？
 * 要求算法的空间复杂度为O(n)。
 * 你能进一步完善解法吗？要求在C++或任何其他语言中不使用任何内置函数（如 C++ 中的 __builtin_popcount）来执行此操作。
 *
 *
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  let dp = [0]; // 用于递推，0的1数量为0

  // 遍历所有数字，分别计算1的个数
  for (let i = 1; i <= num; i++) {
    // 奇数的1数量，等于上一个偶数的1数量加1，即 dp[i] = dp[i - 1] + 1
    // 偶数的1数量，等于dp[i/2]的数量，即 dp[i] = dp[i >> 2]
    // 如果当前是奇数，dp[i - 1] === dp[i >> 2]，即 dp[i] = dp[i >> 2] + 1
    // 如果当前是偶数，dp[i] = dp[i >> 2]
    // 对于每一位来说，dp[i] = dp[i >> 2]是固定的，只需要增加判断i是否奇数，是就加1
    dp[i] = dp[i >> 1] + (i & 1);
  }

  return dp;
};
// @lc code=end
