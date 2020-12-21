/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let pre = 0;
  let i = 0;

  function build(stop) {
    if (stop === inorder[i]) {
      return null;
    }

    const node = new TreeNode(preorder[pre++]);

    node.left = build(node.val);
    i++;
    node.right = build(stop);

    return node;
  }

  return build();
};
// @lc code=end
