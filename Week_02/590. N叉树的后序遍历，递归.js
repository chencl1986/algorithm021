/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
  let result = [];

  function traversal(node) {
    if (!node) {
      return;
    }

    if (node.children) {
      node.children.forEach((child) => {
        traversal(child);
      });
    }

    result.push(node.val);
  }
  traversal(root);

  return result;
};
// @lc code=end
