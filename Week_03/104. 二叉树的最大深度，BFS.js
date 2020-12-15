/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let queue = []; // 存储层序遍历结果
  let level = 0; // 记录遍历的二叉树层级
  root && queue.push(root); // 如果树存在，才进行遍历

  // 不断遍历队列，直到队列为空时，完成树的层序遍历
  while (queue.length) {
    // 缓存当前层的节点数量，避免队列操作过程中数量不断改变，对for循环次数造成影响
    let queueLength = queue.length;

    // 每次只遍历当前一层的节点
    while (--queueLength >= 0) {
      // 将当前层的节点依次从队列取出
      const node = queue.shift();

      // 如果子节点存在，则将子节点入队，作为下一层的节点
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    // 遍历完一层之后，层数加1
    level++;
  }

  // 由于每次都会遍历一层，当完成二叉树遍历时，最后的层数就是最大深度
  return level;
};
// @lc code=end
