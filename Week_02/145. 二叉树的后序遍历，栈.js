/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function (root) {
  let result = [];
  let stack = [];
  root && stack.push(root);

  while (stack.length) {
    const pop = stack.pop();

    result.unshift(pop.val);
    pop.left && stack.push(pop.left);
    pop.right && stack.push(pop.right);
  }

  return result;
};
// @lc code=end
