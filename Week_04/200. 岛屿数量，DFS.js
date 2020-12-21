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
  let count = 0; // 统计岛屿数量

  // 遍历地图的行
  for (let i = 0; i < grid.length; i++) {
    // 遍历地图的列
    for (let j = 0; j < grid[i].length; j++) {
      // 当遇到1时，表示遇到了岛屿
      if (grid[i][j] === '1') {
        // 将岛屿计数加1
        count++;
        // 使用DFS将当前坐标相邻的1全部改为0，也就是将整个岛屿沉没
        // 岛屿所有的坐标都改为0后，之后的遍历不会再遇到这个岛屿的1，确保了不会对岛屿重复计数
        sinkIsland(i, j);
      }
    }
  }

  // 使用DFS，将当前岛屿所有坐标值都改为0，让当前岛屿沉没
  function sinkIsland(i, j) {
    if (
      // 当坐标超出地图时，停止沉岛
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[i].length ||
      // 当遇到水时，停止沉岛
      grid[i][j] === '0'
    ) {
      return;
    }

    // 将当前坐标的值修改为0
    grid[i][j] = '0';

    // 将坐标向上下左右4个方向移动，继续修改岛屿的值
    sinkIsland(i - 1, j);
    sinkIsland(i, j - 1);
    sinkIsland(i + 1, j);
    sinkIsland(i, j + 1);
  }

  // 返回统计的岛屿数量
  return count;
};
// @lc code=end
