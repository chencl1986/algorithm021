/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 *
 * https://leetcode-cn.com/problems/longest-common-subsequence/description/
 *
 * algorithms
 * Medium (60.69%)
 * Likes:    326
 * Dislikes: 0
 * Total Accepted:    61.7K
 * Total Submissions: 101.7K
 * Testcase Example:  '"abcde"\n"ace"'
 *
 * 给定两个字符串 text1 和 text2，返回这两个字符串的最长公共子序列的长度。
 *
 * 一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
 * 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde"
 * 的子序列。两个字符串的「公共子序列」是这两个字符串所共同拥有的子序列。
 *
 * 若这两个字符串没有公共子序列，则返回 0。
 *
 *
 *
 * 示例 1:
 *
 * 输入：text1 = "abcde", text2 = "ace"
 * 输出：3
 * 解释：最长公共子序列是 "ace"，它的长度为 3。
 *
 *
 * 示例 2:
 *
 * 输入：text1 = "abc", text2 = "abc"
 * 输出：3
 * 解释：最长公共子序列是 "abc"，它的长度为 3。
 *
 *
 * 示例 3:
 *
 * 输入：text1 = "abc", text2 = "def"
 * 输出：0
 * 解释：两个字符串没有公共子序列，返回 0。
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= text1.length <= 1000
 * 1 <= text2.length <= 1000
 * 输入的字符串只含有小写英文字符。
 *
 *
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  // 分别缓存两个字符串的长度
  const m = text1.length;
  const n = text2.length;
  // 初始化DP数组，默认值为第一行，对应text1为空字符串的情况，初始值都为0
  let dp = [new Array(n + 1).fill(0)];

  // 遍历text1
  for (let i = 1; i <= m; i++) {
    // 存入当前行的状态，第一列对应了text2为空字符串的情况，初始值都为0
    dp.push(new Array(n + 1).fill(0));

    // 遍历text2
    for (let j = 1; j <= n; j++) {
      // 如果当前字母相等，当前位置一定可以加1，那么只需从text1[0]到text1[i-2]和text2[0]到text2[j-2]的公共子序列推导到此处即可
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // 当前字母不相等
        // 但从text1[0]到text1[i - 1]与text2[0]到text2[j - 2]，或者从text1[0]到text1[i - 2]与text2[0]到text2[j - 1]进行对比的话，都可能会出现公共子序列
        // 由于涉及到两种情况，此处需要取最大值
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // 推导完两个字符串长度，最后得到的就是最长公共子序列
  return dp[m][n];
};
// @lc code=end
