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
/*
 */
var buildTree = function (preorder, inorder) {
  /**
   * @description 通过不断移动前、中序遍历的索引，生成二叉树
   * @param {number} stop // 停止递归的值
   * @return {TreeNode}
   */
  let preorderIndex = 0; // 前序遍历的索引指针
  let inorderIndex = 0; // 中序遍历的索引指针

  function build(
    stop, // 已生成节点的值
  ) {
    // 如果当前中序遍历对应的值已被生成过节点，则无需重复生成
    if (inorder[inorderIndex] === stop) {
      return null;
    }

    // 使用谦虚遍历的值创建一个节点，同时将指针向前移动一位
    const root = new TreeNode(preorder[preorderIndex++]);

    // 标记当前值已被生成过节点，继续向左子节点递归
    root.left = build(root.val);
    // 中序遍历指针向前移动，不断查找可以生成右子节点的值
    inorderIndex++;
    // 将上层递归的结点值传入右子节点的递归，标记其已生成过节点
    root.right = build(stop);

    // 将当前生成好的节点返回到上一层递归，供连接到根节点
    return root;
  }

  return build();
};
