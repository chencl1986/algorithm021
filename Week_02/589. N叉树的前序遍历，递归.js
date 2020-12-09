/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  let result = [];

  function traversal(node) {
    if (!node) {
      return;
    }

    result.push(node.val);

    if (node.children) {
      node.children.forEach((child) => {
        traversal(child);
      });
    }
  }
  traversal(root);

  return result;
};
// @lc code=end
