/*
 * @lc app=leetcode.cn id=529 lang=javascript
 *
 * [529] 扫雷游戏
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
  // 规则1
  // 如果第一次点击就踩到雷，游戏结束
  if (board[click[0]][click[1]] === 'M') {
    // 将当前雷的位置改为X
    board[click[0]][click[1]] = 'X';
    // 返回新矩阵
    return board;
  }

  // 获取矩阵行数
  const xLength = board.length;
  // 获取矩阵列数
  const yLength = board[0].length;
  // 当前坐标周围8个点的行方向坐标，从正上方开始，按顺时针方向排列
  const xDirection = [0, 1, 1, 1, 0, -1, -1, -1];
  // 当前坐标周围8个点的列方向坐标，从正上方开始，按顺时针方向排列
  const yDirection = [1, 1, 0, -1, -1, -1, 0, 1];
  let queue = [click];

  // 判断当前坐标是否在矩阵内
  function isInMatrix(x, y) {
    return x >= 0 && y >= 0 && x < xLength && y < yLength;
  }

  // 不断将坐标点从队列取出进行处理，队列被清空后，表示所有点都处理完毕
  while (queue.length) {
    // 出队一个点，判断要如何显示
    const [x, y] = queue.shift();

    // 如果当前坐标已被处理过，则跳过
    if (board[x][y] !== 'E') {
      continue;
    }

    // 统计当前坐标周围的地雷数量
    let count = 0;
    // 统计当前坐标周围8个方向的坐标点
    let aroundPoints = [];

    for (let i = 0; i < 8; i++) {
      // 生成当前坐标周围的8个点坐标
      let aroundX = x + xDirection[i];
      let aroundY = y + yDirection[i];

      // 判断当前坐标是否在矩阵内部
      if (isInMatrix(aroundX, aroundY)) {
        // 只有周围点的坐标不为E，才需要入队，供下一次处理
        if (board[aroundX][aroundY] === 'E') {
          aroundPoints.push([aroundX, aroundY]);
        }

        // 如果当前坐标周围有地雷，则统计数量
        if (board[aroundX][aroundY] === 'M') {
          count++;
        }
      }
    }
    // 规则2
    // 如果当前坐标周围没有地雷，则修改为B
    if (count === 0) {
      board[x][y] = 'B';

      // 继续查找周围的坐标是否需要标记地雷数量
      for (let i = 0; i < aroundPoints.length; i++) {
        queue.push(aroundPoints[i]);
      }
    } else {
      // 规则3
      // 如果当前坐标周围的地雷数量大于0，则将其修改为地雷数量
      board[x][y] = count.toString();
    }
  }

  // 将新矩阵返回
  return board;
};
// @lc code=end
