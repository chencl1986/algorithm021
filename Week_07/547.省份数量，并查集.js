/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const unionFind = new UnionFind(isConnected);
  const m = isConnected.length;
  const n = isConnected[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (isConnected[i][j] === 1) {
        unionFind.union(i, j);
        unionFind.uni;
      }
    }
  }

  return unionFind.count;
};

class UnionFind {
  constructor(isConnected) {
    this.count = 0;
    this.parent = new Array(isConnected.length);

    for (let i = 0; i < isConnected.length; i++) {
      this.parent[i] = i;
      this.count++;
    }
  }

  find(p) {
    while (p !== this.parent[p]) {
      this.parent[p] = this.parent[this.parent[p]];
      p = this.parent[p];
    }

    return p;
  }

  union(p, q) {
    const rootP = this.find(p);
    const rootQ = this.find(q);

    if (rootP === rootQ) {
      return;
    }

    this.parent[rootP] = rootQ;
    this.count--;
  }
}
// @lc code=end
