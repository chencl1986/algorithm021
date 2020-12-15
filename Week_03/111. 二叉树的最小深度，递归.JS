/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function (root) {
  let min = 0;

  function traversal(node, level) {
    let newLevel = level + 1;

    if (!node.left && !node.right) {
      if (min === 0) {
        min = newLevel;
      } else {
        min = Math.min(min, newLevel);
      }
      return;
    }

    node.left && traversal(node.left, newLevel);
    node.right && traversal(node.right, newLevel);
  }
  root && traversal(root, 0);

  return min;
};
// @lc code=end
