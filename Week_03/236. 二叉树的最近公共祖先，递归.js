/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 如果root不存在，直接退出循环
  // 如果查询到p或q，则将其返回，供上层递归判断
  if (!root || root === p || root === q) {
    return root;
  }

  // 获取在子树中匹配到的p和q节点
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  // 如果p和q同时匹配到，当前节点即为最近公共祖先
  if (left && right) {
    return root;
  }

  // 如果没有同时匹配到p和q，就将匹配到的节点返回给上层判断
  // 最近公共祖先是其本身的情况，会通过该步骤返回
  return left || right;
};
// @lc code=end
