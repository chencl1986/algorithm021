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
  // 递归切割数组到最后，数组会为空，此时退出循环
  if (preorder.length === 0) {
    // 数组为空时，表示当前已经无节点需要生成，返回null
    // 让上一层节点的left和right指针指向null
    return null;
  }

  // 使用当前值创建一个节点，即为一个树的根节点
  const root = new TreeNode(preorder[0]);
  // 查找到当前根节点在数组中的位置
  const rootIndex = inorder.findIndex((value) => preorder[0] === value);

  // 将数组对应左子树的部分切割，向下递归
  // 将当前根节点与已生成好的左子树连接
  root.left = buildTree(
    preorder.slice(1, rootIndex + 1),
    inorder.slice(0, rootIndex),
  );
  // 将数组对应右子树的部分切割，向下递归
  // 将当前根节点与已生成好的右子树连接
  root.right = buildTree(
    preorder.slice(rootIndex + 1),
    inorder.slice(rootIndex + 1),
  );

  // 将根节点返回供上层节点连接
  return root;
};
