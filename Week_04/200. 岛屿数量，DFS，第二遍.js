/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;
  let dx = [1, 0, -1, 0];
  let dy = [0, 1, 0, -1];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        count++;
        slink(i, j);
      }
    }
  }

  function slink(i, j) {
    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[i].length ||
      grid[i][j] === '0'
    ) {
      return;
    }

    grid[i][j] = '0';

    for (let k = 0; k < 4; k++) {
      slink(i + dx[k], j + dy[k]);
    }
  }

  return count;
};
