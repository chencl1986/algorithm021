/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 *
 * https://leetcode-cn.com/problems/edit-distance/description/
 *
 * algorithms
 * Hard (60.28%)
 * Likes:    1366
 * Dislikes: 0
 * Total Accepted:    103.9K
 * Total Submissions: 172.4K
 * Testcase Example:  '"horse"\n"ros"'
 *
 * 给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。
 *
 * 你可以对一个单词进行如下三种操作：
 *
 *
 * 插入一个字符
 * 删除一个字符
 * 替换一个字符
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：word1 = "horse", word2 = "ros"
 * 输出：3
 * 解释：
 * horse -> rorse (将 'h' 替换为 'r')
 * rorse -> rose (删除 'r')
 * rose -> ros (删除 'e')
 *
 *
 * 示例 2：
 *
 *
 * 输入：word1 = "intention", word2 = "execution"
 * 输出：5
 * 解释：
 * intention -> inention (删除 't')
 * inention -> enention (将 'i' 替换为 'e')
 * enention -> exention (将 'n' 替换为 'x')
 * exention -> exection (将 'n' 替换为 'c')
 * exection -> execution (插入 'u')
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0
 * word1 和 word2 由小写英文字母组成
 *
 *
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  // 缓存两个单词的长度，用于创建二维数组递推
  const m = word1.length;
  const n = word2.length;
  // 初始化m+1行
  let dp = new Array(m + 1);

  // 初始化第一行和第一列的值，每个单词自身都是从空字符串，一直变化到当前长度
  // 因此初始值都是0~m或0~n
  for (let i = 0; i <= m; i++) {
    dp[i] = [i];
  }
  for (let i = 0; i <= n; i++) {
    dp[0][i] = i;
  }

  // 递推每个字母操作数
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 缓存当前对比的字母
      const char1 = word1[i - 1];
      const char2 = word2[j - 1];

      if (char1 === char2) {
        // 当前两个字母相等，表示当前无需进行变化，可以直接从上一个字母的操作数递推而来
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // 
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }

  return dp[m][n];
};
// @lc code=end
