/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const m = grid.length - 1;

  if (grid[0][0] === 1) {
    return -1;
  }
  if (grid[m][m] === 1) {
    return -1;
  }
  if (grid.length === 1) {
    return 1;
  }

  let queue = [[0, 0]];
  let count = 1;
  const d = [
    // [0, -1],
    [1, -1],
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    // [-1, 0],
    // [-1, -1]
  ];

  while (queue.length) {
    let queueLength = queue.length;

    while (--queueLength >= 0) {
      const [i, j] = queue.shift();

      for (let k = 0; k < d.length; k++) {
        const x = i + d[k][0];
        const y = j + d[k][1];

        if (x >= 0 && y >= 0 && x <= m && y <= m && grid[x][y] === 0) {
          if (x === m && y === m) {
            return count + 1;
          }

          grid[x][y] = 1;
          queue.push([x, y]);
        }
      }
    }

    count++;
  }

  return -1;
};
