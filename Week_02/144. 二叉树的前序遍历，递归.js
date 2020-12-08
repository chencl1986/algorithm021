/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let result = [];

  function traversal(node) {
    if (!node) {
      return node;
    }

    result.push(node.val);
    traversal(node.left);
    traversal(node.right);
  }
  traversal(root);

  return result;
};
// @lc code=end
