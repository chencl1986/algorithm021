/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let queue = [];
  let result = [];
  root && queue.push(root);

  while (queue.length) {
    let len = queue.length;
    let curr = result.length;
    result.push([]);

    while (--len >= 0) {
      const node = queue.shift();

      result[curr].push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return result;
};
// @lc code=end
