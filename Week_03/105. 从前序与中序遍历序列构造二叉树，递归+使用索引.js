/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  /**
   * @description 使用前中序遍历结果的片段，递归生成二叉树
   * @param {number} preLeft // 每个子树在前序遍历中的左边界
   * @param {number} preRight // 每个子树在前序遍历中的右边界
   * @param {number} inLeft // 每个子树在中序遍历中的左边界
   * @param {number} inRight // 每个子树在中序遍历中的右边界
   * @return {TreeNode}
   */
  function buildBinaryTree(preLeft, preRight, inLeft, inRight) {
    // 当截取数组片段的左边界大于右边界时，表示当前用于构造子树的数组为空，退出循环
    if (preLeft > preRight) {
      // 数组为空时，表示当前已经无节点需要生成，返回null
      // 让上一层节点的left和right指针指向null
      return null;
    }

    // 缓存根节点的值
    const rootVal = preorder[preLeft];
    // 使用当前值创建一个节点，即为一个树的根节点
    const root = new TreeNode(rootVal);
    // 查找到当前根节点在数组中的位置
    const rootIndex = inorder.indexOf(rootVal);
    // 中序遍历的左边界到根节点之差是子树的节点数量
    // 由于左边界始终会存在，因此向左统计总是可以得到子树的节点数量
    const nodeCount = rootIndex - inLeft;

    // 计算数组对应左子树的索引，向下递归
    // 将当前根节点与已生成好的左子树连接
    root.left = buildBinaryTree(
      preLeft + 1, // 左子树的前序遍历左边界
      preLeft + nodeCount, // 当前左边界加上子树节点数量，即为左子树的前序遍历右边界
      inLeft, // 左子树的中序遍历左边界
      rootIndex - 1, // 左子树的中序遍历右边界
    );
    // 计算数组对应右子树的索引，向下递归
    // 将当前根节点与已生成好的右子树连接
    root.right = buildBinaryTree(
      preLeft + nodeCount + 1, // 当前左边界加上子树节点数量再加1，即为右子树的前序遍历左边界
      preRight, // 右子树的前序遍历右边界
      rootIndex + 1, // 右子树的中序遍历左边界
      inRight, // 右子树的中序遍历右边界
    );

    // 将根节点返回供上层节点连接
    return root;
  }

  // 生成二叉树并返回
  return buildBinaryTree(0, preorder.length - 1, 0, preorder.length - 1);
};
