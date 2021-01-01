/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // 创建第一行，且第一行只有一种走法
  let arr = new Array(n).fill(1);

  // 第一行的走法都是1，因此从第二行开始计算
  for (let i = 1; i < m; i++) {
    // 第一列的走法都为1，因此从第二列开始计算
    for (let j = 1; j < n; j++) {
      // 每个位置都是上方和左方两个点走过来的
      // 那么当前走法数量，就是上方和左方个位置的走法之和
      // 当前位置原本存储的是上一行的结果，存储新结果之后，它就变成了下一位置的左边结果
      arr[j] = arr[j] + arr[j - 1];
    }
  }

  // 数组的最后一位存储的就是最终结果
  return arr[n - 1];
};
