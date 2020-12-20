/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let code = 0; // 保存ASCII码的值

  // 遍历将t中所有字符ASCII码的值求和
  for (const char of t) {
    code += char.charCodeAt(0);
  }

  // 因为t比s多一个字符，因此只要将t中字符ASCII码减去s的ASCII码，剩下的一个就是被添加的字符
  for (const char of s) {
    code -= char.charCodeAt(0);
  }

  // 将ASCII码转换成字符串，就得到了结果
  return String.fromCharCode(code);
};
// @lc code=end
