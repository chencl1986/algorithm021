/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  function traversal(node, left, right) {
    if (!node) {
      return true;
    }

    if (left >= node.val || node.val >= right) {
      return false;
    }

    return (
      traversal(node.left, left, node.val) &&
      traversal(node.right, node.val, right)
    );
  }
  return traversal(root, -Infinity, Infinity);
};
// @lc code=end
