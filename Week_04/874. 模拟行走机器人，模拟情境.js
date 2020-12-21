/*
 * @lc app=leetcode.cn id=874 lang=javascript
 *
 * [874] 模拟行走机器人
 */

// @lc code=start
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];
  let d = 0;

  let x = 0;
  let y = 0;
  let max = 0;

  let set = new Set(obstacles.map((item) => item.toString()));

  for (const command of commands) {
    if (command === -1) {
      d = (d + 1) % 4;
    } else if (command === -2) {
      d = (d + 3) % 4;
    } else {
      for (let i = 0; i < command; i++) {
        let newX = x + dx[d];
        let newY = y + dy[d];

        if (set.has(`${newX},${newY}`)) {
          break;
        }

        x = newX;
        y = newY;
        max = Math.max(max, x ** 2 + y ** 2);
      }
    }
  }

  return max;
};
// @lc code=end
