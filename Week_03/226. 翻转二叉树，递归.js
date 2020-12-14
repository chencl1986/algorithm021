/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  function traversal(node) {
    if (!node) {
      return;
    }

    [node.left, node.right] = [node.right, node.left];

    traversal(node.left);
    traversal(node.right);
  }
  traversal(root);

  return root;
};
// @lc code=end
