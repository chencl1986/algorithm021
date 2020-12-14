/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let max = 0;

  function traversal(node, level) {
    if (!node) {
      max = Math.max(level, max);
      return;
    }

    traversal(node.left, level + 1);
    traversal(node.right, level + 1);
  }
  traversal(root, 0);

  return max;
};
// @lc code=end
