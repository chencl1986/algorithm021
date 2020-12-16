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
let map = new Map();

function dfs(node) {
  if (node.left) {
    map.set(node.left, node);
    dfs(node.left);
  }
  if (node.right) {
    map.set(node.right, node);
    dfs(node.right);
  }
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  dfs(root);

  let set = new Set();

  while (p) {
    set.add(p);
    p = map.get(p);
  }

  while (q) {
    if (set.has(q)) {
      return q;
    }
    q = map.get(q);
  }
};
// @lc code=end
