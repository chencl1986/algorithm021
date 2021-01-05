/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // 按行数创建一个数组，用来存储整个网格，每个格子都存储到达当前位置所需的路径数
  let arr = new Array(m);

  // 遍历网格的行
  for (let i = 0; i < arr.length; i++) {
    // 只有网格超过一行，才需要计算
    if (i > 0) {
      // 网格第一列，就只有一种走法，因此存入1
      arr[i] = [1];

      // 从1开始遍历网格的列
      for (let j = 1; j < n; j++) {
        // 每个位置都是上方和左方两个点走过来的
        // 那么当前走法数量，就是上方和左方个位置的走法之和
        arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
      }
    } else {
      // 网格的第一行只有一种走法，因此全部为1
      arr[i] = new Array(n).fill(1);
    }
  }

  // 网格的最后一个位置，存储的就是最终结果
  return arr[m - 1][n - 1];
};
