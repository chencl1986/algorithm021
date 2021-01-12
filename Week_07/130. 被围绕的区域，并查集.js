/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if (!board.length) {
    return [];
  }
  const m = board.length;
  const n = board[0].length;
  const x = m - 1;
  const y = n - 1;
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  const dummy = m * n;
  let unionFind = new UnionFind(dummy + 1);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O') {
        if (i === 0 || j === 0 || i === x || j === y) {
          unionFind.union(i * n + j, dummy);
        } else {
          for (let k = 0; k < 4; k++) {
            const newI = i + dx[k];
            const newJ = j + dy[k];

            if (board[newI][newJ] === 'O') {
              unionFind.union(i * n + j, newI * n + newJ);
            }
          }
        }
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O') {
        if (!unionFind.isConnected(i * n + j, dummy)) {
          board[i][j] = 'X';
        }
      }
    }
  }
};

class UnionFind {
  constructor(n) {
    this.parent = new Array(n);

    for (let i = 0; i < this.parent.length; i++) {
      this.parent[i] = i;
    }
  }

  find(p) {
    while (p !== this.parent[p]) {
      this.parent[p] = this.parent[this.parent[p]];
      p = this.parent[p];
    }

    return p;
  }

  isConnected(p, q) {
    return this.find(p) === this.find(q);
  }

  union(p, q) {
    const rootP = this.find(p);
    const rootQ = this.find(q);

    if (rootP === rootQ) {
      return;
    }

    this.parent[rootP] = rootQ;
  }
}
// @lc code=end
