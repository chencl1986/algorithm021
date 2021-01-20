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
  let result = []; // 存出结果

  // 遍历所有数字，分别计算1的个数
  for (let i = 0; i <= num; i++) {
    let count = 0; // 统计当前数字的1数量
    let n = i; // 缓存当前数字

    // 只要n不为0，就继续删除1
    while (n !== 0) {
      n &= n - 1; // 每次清除最后一位1
      count++; // 统计清除数量
    }

    // 将1的数量存入结果
    result.push(count);
  }

  return result;
};
// @lc code=end
