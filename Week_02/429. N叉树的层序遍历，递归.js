/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let result = [];

  function traversal(node, level) {
    if (!node) {
      return node;
    }

    result[level] ? result[level].push(node.val) : (result[level] = [node.val]);

    if (node.children) {
      node.children.forEach((child) => {
        traversal(child, level + 1);
      });
    }
  }
  traversal(root, 0);

  return result;
};
// @lc code=end
