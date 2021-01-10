/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  /* 
如果输入aabaca，双循环生成的所有子串如下：
如果在第一层循环结束时，打印生成的子串，会发现实际上是从左到右按列生成的。
[
  [ 'a     ', 'aa    ', 'aab   ', 'aaba  ', 'aabac ', 'aabaca' ],
  [ '      ', 'a     ', 'ab    ', 'aba   ', 'abac  ', 'abaca ' ],
  [ '      ', '      ', 'b     ', 'ba    ', 'bac   ', 'baca  ' ],
  [ '      ', '      ', '      ', 'a     ', 'ac    ', 'aca   ' ],
  [ '      ', '      ', '      ', '      ', 'c     ', 'ca    ' ],
  [ '      ', '      ', '      ', '      ', '      ', 'a     ' ]
]
*/
  let count = 0; // 统计所有回文子串数量
  let dp = []; // 将所有生成的子串用矩阵标记，是回文子串的标记为true，其余为false
  // let strs = []; // 用于生成所有子串

  // 标记每行的子串
  for (let j = 0; j < s.length; j++) {
    // 默认一行中所有的子串都是false
    dp.push(new Array(s.length).fill(false));
    // strs.push(new Array(s.length).fill(new Array(s.length).fill(' ').join('')));
    // 标记每列的子串，
    for (let i = 0; i <= j; i++) {
      // 生成子串的代码
      /* strs[i][j] = s.slice(i, j + 1);
      while (strs[i][j].length < s.length) {
        strs[i][j] += ' ';
      } */
      // 两个索引相等时，子串只有一个字母，此时必然是是回文串
      if (j === i) {
        count++; // 将子串计数
        dp[i][j] = true; // 在矩阵中标记回文子串
      }
      // 有两个字母，且两个字母相等，是回文串
      else if (j - i === 1 && s[i] === s[j]) {
        count++; // 将子串计数
        dp[i][j] = true; // 在矩阵中标记回文子串
      } else if (
        // 字符串数量多于两个
        j - i > 1 &&
        // 首尾两个字母相等
        s[i] === s[j] &&
        // 且dp[i + 1][j - 1]，也就是剔除首尾后的子串是回文子串
        dp[i + 1][j - 1]
      ) {
        count++; // 将子串计数
        dp[i][j] = true; // 在矩阵中标记回文子串
      }
    }
    // 打印每次循环生成的结果
    // console.log(strs);
    // console.log(dp);
  }
  // 打印标记好的子串结果
  // console.log(strs);
  // console.log(dp);

  return count;
};
// @lc code=end
