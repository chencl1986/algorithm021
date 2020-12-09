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
  let queue = [];
  root && queue.push(root);

  while (queue.length) {
    let len = queue.length;
    let last = result.length;
    result.push([]);

    while (--len >= 0) {
      let node = queue.shift();

      result[last].push(node.val);

      node.children && queue.push(...node.children);
    }
  }

  return result;
};
// @lc code=end
