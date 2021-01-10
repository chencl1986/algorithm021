/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  // 如果编码不存在或者第一个数字为0，会无法解码，返回0
  if (s.length === 0 || s[0] === '0') {
    return 0;
  }
  // 该题需要向前查找两个数字，因此创建的dp数组长度加1，表示从0开始推导
  // 由于dp长度比s大1，因此递推时dp[i+1]位置才对应的是s[i]
  // 实际有效初始化的是数组的前两个值，因为第一个数字必然可以编码
  // 而递推是从第二个数字开始，如果前两个数字可以编码，就需要从前0和1两种情况开始递推
  let dp = new Array(s.length + 1).fill(1);

  // 由于要考虑两个数字的编码，因此从1开始递推
  for (let i = 1; i < s.length; i++) {
    // 获取前一个数字
    const prevChar = s[i - 1];
    // 获取连续的两个数字
    const towChar = s[i - 1] + s[i];

    // 只有编码0是特殊的
    if (s[i] === '0') {
      // 如果前一个编码是1或2，那么连续两个编码就有意义
      if (prevChar === '1' || prevChar === '2') {
        // 当前位置的编码方式，和上一个编码相同
        dp[i + 1] = dp[i - 1];
      } else {
        // 如果前一个编码不是1或2，例如30，它是一个无意义编码，直接返回0
        return 0;
      }
    }
    // 如果是10~26的编码，是有意义的数字
    else if (10 < towChar && towChar <= 26) {
      // 当前位置的编码方式，是由前两个位置的编码方式结合而成
      dp[i + 1] = dp[i] + dp[i - 1];
    } else {
      // 当前位置的编码方式，和上一个编码相同
      dp[i + 1] = dp[i];
    }
  }

  return dp[s.length];
};
// @lc code=end
