/*
 * @lc app=leetcode.cn id=1091 lang=javascript
 *
 * [1091] 二进制矩阵中的最短路径
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  // 调试Case
  // [[0,0,0],[0,0,0],[0,0,0]]
  // [[0,0,0],[1,1,0],[1,1,0]]
  // [[0,1,0,0],[0,0,0,1],[0,0,0,0],[0,0,0,0]]
  // [[0,0,0,0,1],[1,0,0,0,0],[0,1,0,1,0],[0,0,0,1,1],[0,0,0,1,0]]
  // [[0,0,1,0,1,1],[1,0,0,1,0,0],[0,1,0,1,0,0],[1,0,1,0,0,0],[0,1,0,1,0,0],[0,0,0,0,0,0]]
  // [[0,0,1,0,0,0,0],[0,1,0,0,0,0,1],[0,0,1,0,1,0,0],[0,0,0,1,1,1,0],[1,0,0,1,1,0,0],[1,1,1,1,1,0,1],[0,0,1,0,0,0,0]]
  // [[0,0,0,0,1,1,1,1,0],[0,1,1,0,0,0,0,1,0],[0,0,1,0,0,0,0,0,0],[1,1,0,0,1,0,0,1,1],[0,0,1,1,1,0,1,0,1],[0,1,0,1,0,0,0,0,0],[0,0,0,1,0,1,0,0,0],[0,1,0,1,1,0,0,0,0],[0,0,0,0,0,1,0,1,0]]
  // 缓存矩阵的终点位置
  const m = grid.length - 1;
  const n = grid[0].length - 1;
  const row = grid[0].length;

  // 当起点和终点为1时，必然无法到达终点
  if (grid[0][0] === 1 || grid[m][n] === 1) {
    return -1;
  }

  // 如果矩阵只有1个点，且为0，路径为1
  if (m === 0 && n === 0 && grid[0][0] === 0) {
    return 1;
  }

  const start = [0, 0];
  let visited = new Set();
  let routeMap = new Map();
  let distanceMap = new Map([start]);
  const heuristic = (a, b) => {
    return Math.max(Math.abs(m - a), Math.abs(n - b));
  };
  let minPriorityQueue = new MinPriorityQueue();
  minPriorityQueue.enqueue(0, Infinity);
  // 可以向四周所有方向行走，缓存8个方向
  const direction = [
    [1, 0], // 下
    [0, 1], // 右
    [1, 1], // 右下
    [-1, 1], // 右上
    [1, -1], // 左下
    // 一下3种都是往回走，无需判断
    // [-1, 0], // 上
    // [0, -1], // 左
    // [-1, -1], // 左上
  ];
  // 如果队列中有值，则继续搜索
  while (minPriorityQueue.size()) {
    // 出队一个坐标，计算它可以行走的下一步位置
    let node = minPriorityQueue.dequeue().element;
    const x = Math.floor(node / row);
    const y = node % row;

    if (visited.has(node)) {
      continue;
    }
    if (x === m && y === n) {
      let route = [node];
      // grid[x][y] = 8;

      while (routeMap.has(node)) {
        node = routeMap.get(node);
        route.unshift(node);
        // grid[x][y] = 8;
      }
      // console.log(route);
      // console.log(grid);

      return route.length;
    }
    // grid[x][y] = 8;
    visited.add(node);

    for (let i = 0; i < direction.length; i++) {
      // 下一步可以向四周行走，计算出相应新坐标
      const newX = x + direction[i][0];
      const newY = y + direction[i][1];
      const newNode = newX * row + newY;

      if (
        !visited.has(newNode) &&
        // 判断新坐标不可超出矩阵
        newX >= 0 &&
        newY >= 0 &&
        newX <= m &&
        newY <= n &&
        // 下一步可以行走，才进行记录
        grid[newX][newY] !== 1
      ) {
        // 将下一步的坐标存入队列，用于下一层循环
        const nextStep = distanceMap.get(node) + 1;
        minPriorityQueue.enqueue(newNode, nextStep + heuristic(newX, newY));

        if (!distanceMap.has(newNode) || nextStep < distanceMap.get(newNode)) {
          distanceMap.set(newNode, nextStep);
          routeMap.set(newNode, node);
        }
      }
    }
  }

  return -1;
};
// @lc code=end

[
  [0, 0, 1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 1],
  [0, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 1, 1, 1, 0],
  [1, 0, 0, 1, 1, 0, 0],
  [1, 1, 1, 1, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 0],
];
[
  [7, 7, 1, 7, 0, 0, 0],
  [7, 1, 7, 7, 7, 0, 1],
  [7, 7, 1, 7, 1, 7, 0],
  [7, 7, 7, 1, 1, 1, 7],
  [1, 7, 7, 1, 1, 7, 7],
  [1, 1, 1, 1, 1, 7, 1],
  [0, 0, 1, 0, 0, 0, 8],
];
[
  [7, 7, 7, 0, 1, 1, 1, 1, 0],
  [7, 1, 1, 7, 0, 0, 0, 1, 0],
  [7, 7, 1, 7, 7, 0, 0, 0, 0],
  [1, 1, 7, 7, 1, 7, 0, 1, 1],
  [0, 0, 1, 1, 1, 7, 1, 0, 1],
  [0, 1, 0, 1, 0, 7, 7, 0, 0],
  [0, 0, 0, 1, 0, 1, 7, 7, 0],
  [0, 1, 0, 1, 1, 0, 0, 7, 7],
  [0, 0, 0, 0, 0, 1, 0, 1, 7],
];
