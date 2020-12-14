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
  let prev = -Infinity;
  let judge = true;

  function traversal(node) {
    if (!node) {
      return;
    }

    traversal(node.left);
    if (prev >= node.val) {
      judge = false;
      return;
    }
    prev = node.val;
    traversal(node.right);
  }

  traversal(root);

  return judge;
};
// @lc code=end
