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
  let queue = [root]; // 使用队列遍历二叉树
  let serialized = []; // 用数组存储序列化后的值

  // 队列被清空时，表示完成了二叉树的遍历
  while (queue.length) {
    // 缓存当前一行的节点数量
    let queueLength = queue.length;

    // 将当前一行的节点出队，进行处理
    for (let i = 0; i < queueLength; i++) {
      const node = queue.shift();

      if (node) {
        // 如果当前节点不为null，将其值存入serialized
        serialized.push(node.val);
        // 将左右子节点存入队列，供下一行遍历处理
        // 队列中的节点，总是保持根、左、右的顺序排列
        queue.push(node.left, node.right);
      } else {
        // 如果当前节点为null，将X存入serialized
        serialized.push('X');
      }
    }
  }

  // 将数组转换成字符串返回
  return serialized.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  // 如果根节点为null，那么data为X，直接返回null即可
  if (data === 'X') {
    return null;
  }

  // 将data转换为数组方便依次处理
  const valList = data.split(',');
  // 从数组中出队根节点的值，创建一个根节点
  const root = new TreeNode(valList.shift());
  // 将根节点存入队列，使用队列辅助创建二叉树
  let queue = [root];

  // valList被清空，表示所有值都已用来创建二叉树
  while (valList.length) {
    // 从队列中出队一个节点
    const node = queue.shift();
    // 因为valList中的值都是按照根、左、右排列，所以可以从valList连续出队左右子节点的值
    const left = valList.shift();
    const right = valList.shift();

    // 如果值不为空，就创建一个节点
    // 此时意味着valList还存有其子节点的值，此时只需要将节点存入queue，即可在下一次循环中处理
    if (left !== 'X') {
      node.left = new TreeNode(left);
      queue.push(node.left);
    }
    if (right !== 'X') {
      node.right = new TreeNode(right);
      queue.push(node.right);
    }
  }

  // 将生成的二叉树根节点返回即可
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
