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
  let stack = [];
  root && stack.push(root);

  while (stack.length) {
    const pop = stack.pop();

    result.push(pop.val);
    pop.right && stack.push(pop.right);
    pop.left && stack.push(pop.left);
  }

  return result;
};
// @lc code=end
