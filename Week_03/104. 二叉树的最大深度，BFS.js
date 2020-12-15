/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function (root) {
  let level = 0;
  let queue = [];
  root && queue.push(root);

  while (queue.length) {
    let queueLength = queue.length;

    while (--queueLength >= 0) {
      const node = queue.shift();

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    level++;
  }

  return level;
};
// @lc code=end
