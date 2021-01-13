/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]
  // [["1","0","1","1","0","1","1"]]
  const m = grid.length; // 缓存行数量
  const n = grid[0].length; // 缓存列数量
  const dx = [1, -1, 0, 0]; // 缓存行方向
  const dy = [0, 0, 1, -1]; // 缓存列方向
  // 根据grid上的陆地情况，初始化并查集
  let unionFind = new UnionFind(grid, m, n);

  // 遍历整个地图，将陆地都合并到一个集合中
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 如果是陆地，就进行集合的合并
      if (grid[i][j] === '1') {
        // 将当前位置设置为0，避免重复合并
        grid[i][j] = '0';

        // 计算当前坐标四周的的点坐标
        for (let k = 0; k < 4; k++) {
          // 计算新的i和j
          const newI = i + dx[k];
          const newJ = j + dy[k];

          // 当新坐标在地图内，且也是陆地时，将这些点都合并到一个集合
          if (
            newI >= 0 &&
            newJ >= 0 &&
            newI < m &&
            newJ < n &&
            grid[newI][newJ] === '1'
          ) {
            // 将所有泸定合并到一个集合，并进行计数
            unionFind.union(newI * n + newJ, i * n + j);
          }
        }
      }
    }
  }

  // 所有陆地都合并后，剩下的集合数量就是岛屿数量
  return unionFind.count;
};

// 并查集
class UnionFind {
  constructor(grid, m, n) {
    this.count = 0; // 统计集合数量，初始化为n
    this.parent = new Array(m * n); // 使用数组保存集合

    // 根据grid的值初始化所有集合
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        // 计算grid索引对应并查集中的索引
        const index = i * n + j;

        // 只有是陆地的位置才是集合元素
        if (grid[i][j] === '1') {
          this.parent[index] = index; // 对元素做标记
          this.count++; // 对集合进行计数
        } else {
          this.parent[index] = -1; // 非集合元素标记为-1
        }
      }
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
