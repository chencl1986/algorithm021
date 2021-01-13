/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 *
 * https://leetcode-cn.com/problems/surrounded-regions/description/
 *
 * algorithms
 * Medium (42.29%)
 * Likes:    448
 * Dislikes: 0
 * Total Accepted:    84.2K
 * Total Submissions: 199K
 * Testcase Example:  '[["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]'
 *
 * 给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。
 *
 * 找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。
 *
 * 示例:
 *
 * X X X X
 * X O O X
 * X X O X
 * X O X X
 *
 *
 * 运行你的函数后，矩阵变为：
 *
 * X X X X
 * X X X X
 * X X X X
 * X O X X
 *
 *
 * 解释:
 *
 * 被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O'
 * 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。
 *
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  // 如果board为空，则无需搜索
  if (!board || !board.length) {
    return;
  }
  // [["O","X","X","O","X"],["X","O","O","X","O"],["X","O","X","O","X"],["O","X","O","O","O"],["X","X","O","X","O"]]
  // []

  const m = board.length; // 缓存矩阵行数
  const n = board[0].length; // 缓存矩阵列数
  const x = m - 1; // 缓存最后一行
  const y = n - 1; // 缓存最后一列
  const dummy = m * n; // 创建一个虚拟节点，将所有边缘节点与其连接成一个集合
  const unionFind = new UnionFind(dummy + 1); // 创建集合，数量比矩阵节点总数多一个，即多了虚拟节点
  const dx = [1, -1, 0, 0]; // 缓存行方向向量
  const dy = [0, 0, 1, -1]; // 缓存列方向向量

  // 遍历矩阵的所有点
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 如果当前为O，则 表示需要进行合并
      if (board[i][j] === 'O') {
        const index = i * n + j;

        // 如果节点在边缘，则合并到虚拟节点，形成一个独立集合
        if (i === 0 || j === 0 || i === x || j === y) {
          unionFind.union(index, dummy);
        } else {
          // 如果是中间节点，则只要与四周的节点合并
          // 与边缘连通的节点，自然会被合并到虚拟节点下
          for (let k = 0; k < 4; k++) {
            // 计算四周点的坐标
            const newI = i + dx[k];
            const newJ = j + dy[k];

            // 如果四周节点为O，才需要进行合并
            if (board[newI][newJ] === 'O') {
              unionFind.union(index, newI * n + newJ);
            }
          }
        }
      }
    }
  }

  // 完成集合合并后，再次遍历所有节点，不在虚拟节点集合中的，设置为X
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 判断当前节点是否与虚拟节点连接
      if (!unionFind.isConnect(i * n + j, dummy)) {
        board[i][j] = 'X';
      }
    }
  }
};

class UnionFind {
  constructor(n) {
    this.parent = []; // 使用数组保存集合

    // 初始化所有集合，每个集合的父节点都是自身，也就是它们都是独立集合
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

  // 判断p和q是否属于同一个集合
  isConnect(p, q) {
    // 找到两个节点所在集合的根节点
    const rootP = this.find(p);
    const rootQ = this.find(q);

    // 根节点相等，表示它们在同一个集合
    return rootP === rootQ;
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
