/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 */

// @lc code=start
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let set = new Set(jewels.split(''));
  let count = 0;

  for (let i = 0; i < stones.length; i++) {
    if (set.has(stones[i])) {
      count++;
    }
  }

  return count;
};
// @lc code=end
