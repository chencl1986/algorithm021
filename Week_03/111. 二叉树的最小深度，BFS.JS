/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function (root) {
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

      // 没有子节点的节点就是叶子节点
      // 第一次遇到叶子节点时，当前深度就是最小二叉树深度
      if (!node.left && !node.right) {
        // 由于当前深度还未记录，返回时需要加1
        return level + 1;
      }

      // 如果子节点存在，则将子节点入队，作为下一层的节点
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    // 遍历完一层之后，层数加1
    level++;
  }

  // 如果没有进入循环，当前深度为0
  return level;
};
// @lc code=end
