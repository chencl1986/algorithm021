/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量
 *
 * https://leetcode-cn.com/problems/number-of-provinces/description/
 *
 * algorithms
 * Medium (61.17%)
 * Likes:    474
 * Dislikes: 0
 * Total Accepted:    109.8K
 * Total Submissions: 179.4K
 * Testcase Example:  '[[1,1,0],[1,1,0],[0,0,1]]'
 *
 *
 *
 * 有 n 个城市，其中一些彼此相连，另一些没有相连。如果城市 a 与城市 b 直接相连，且城市 b 与城市 c 直接相连，那么城市 a 与城市 c
 * 间接相连。
 *
 * 省份 是一组直接或间接相连的城市，组内不含其他没有相连的城市。
 *
 * 给你一个 n x n 的矩阵 isConnected ，其中 isConnected[i][j] = 1 表示第 i 个城市和第 j 个城市直接相连，而
 * isConnected[i][j] = 0 表示二者不直接相连。
 *
 * 返回矩阵中 省份 的数量。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：isConnected = [[1,1,0],[1,1,0],[0,0,1]]
 * 输出：2
 *
 *
 * 示例 2：
 *
 *
 * 输入：isConnected = [[1,0,0],[0,1,0],[0,0,1]]
 * 输出：3
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * n == isConnected.length
 * n == isConnected[i].length
 * isConnected[i][j] 为 1 或 0
 * isConnected[i][i] == 1
 * isConnected[i][j] == isConnected[j][i]
 *
 *
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  // 由于只有n个城市，因此指出要初始化n个集合
  const unionFind = new UnionFind(isConnected.length);

  // 遍历所有城市之间的关系
  for (let i = 0; i < isConnected.length; i++) {
    for (let j = 0; j < isConnected[i].length; j++) {
      // 索引相同表示是同一个城市，无需合并
      // 如果两个城市相连，则将两个城市合并
      if (i !== j && isConnected[i][j] === 1) {
        unionFind.union(i, j);
      }
    }
  }

  return unionFind.count;
};

// 并查集
class UnionFind {
  constructor(n) {
    this.count = n; // 统计集合数量，初始化为n
    this.parent = []; // 使用数组保存集合

    // 初始化城市集合
    for (let i = 0; i < n; i++) {
      this.parent.push(i);
    }
  }

  // 查找一个节点所在集合的根节点
  find(p) {
    // 当前节点的父节点是其自身时，它就是集合的根节点
    while (p != this.parent[p]) {
      // 将当前节点父节点指针，直接指向爷爷节点，实现路径压缩
      this.parent[p] = this.parent[this.parent[p]];
      // 将指针向上移动
      p = this.parent[p];
    }

    // 将找到的根节点返回
    return p;
  }

  // 合并两个集合
  union(p, q) {
    // 找到两个节点所在集合的根节点
    let rootP = this.find(p);
    let rootQ = this.find(q);

    // 如果他们是同一个节点，表示p和q在同一个集合，无需合并
    if (rootP === rootQ) {
      return;
    }

    // 将rootP的根节点指向rootQ，完成集合的合并
    this.parent[rootP] = rootQ;
    // 减少集合数量
    this.count--;
  }
}
// @lc code=end
