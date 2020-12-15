/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  // 如果无输入号码，直接返回空数组
  if (!digits || !digits.length) {
    return [];
  }

  let queue = ['']; // 使用队列进行BFS遍历，队列中先存入一个空字符串，用于启动遍历
  let level = 0; // 将生成所有可能按键的过程，当做遍历一个n叉树，用level记录遍历的层数
  // 使用Map存储按键对应的字母
  const map = new Map([
    ['2', 'abc'],
    ['3', 'def'],
    ['4', 'ghi'],
    ['5', 'jkl'],
    ['6', 'mno'],
    ['7', 'pqrs'],
    ['8', 'tuv'],
    ['9', 'wxyz'],
  ]);

  // 当遍历层数达到输入号码层数时，退出循环
  while (level < digits.length) {
    let queueLen = queue.length; // 缓存当前队列节点数，用于控制遍历当前层的节点

    // 每一次循环都只遍历当前一层的节点
    while (--queueLen >= 0) {
      const str = queue.shift(); // 将每个节点出队
      const chars = map.get(digits[level]); // 根据按键数字，查找下一层可能的字母

      // 遍历下一个按键的所有可能字母，生成下一层节点
      for (let i = 0; i < chars.length; i++) {
        queue.push(str + chars[i]);
      }
    }

    // 完成一层节点遍历后，将层数加1
    level++;
  }

  // 完成循环后，队列中剩下的节点就是所有可能的字母组合
  return queue;
};
// @lc code=end
