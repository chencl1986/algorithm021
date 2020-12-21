/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  let result = [];
  let queue = [];
  root && queue.push(root);

  while (queue.length) {
    let len = queue.length;
    let index = result.length;
    result.push(-Infinity);

    while (--len >= 0) {
      const node = queue.shift();

      result[index] = Math.max(node.val, result[index]);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return result;
};
// @lc code=end
