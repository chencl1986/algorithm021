/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  // 如果节点为空，使用一个特定的字符标识
  if (!root) {
    return 'X';
  }

  // 每次递归都获取左右子树的序列化结果
  const left = serialize(root.left);
  const right = serialize(root.right);

  // 将当前二叉树按照根,左,右的方式拼接
  return `${root.val},${left},${right}`;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  // 将序列化的字符串，转换为数组
  const valList = data.split(',');

  // 生成二叉树的方法
  function build() {
    // 由于二叉树已经按照根、左、右的顺序序列化，每次递归只需要按顺序取出每个节点的值即可
    const val = valList.shift();

    // 如果当前值为X，表示此节点为空，直接返回null
    if (val === 'X') {
      return null;
    }

    // 使用当前值生成一个节点
    const node = new TreeNode(val);

    // 由于子节点都是按照先左后右的顺序取出，因此按照同样顺序将子节点连接到根节点即可
    node.left = build();
    node.right = build();

    // 将当前生成的节点返回，供上一层递归生成树
    return node;
  }

  return build();
};
