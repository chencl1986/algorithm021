/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let five = 0;
  let ten = 0;

  for (const bill of bills) {
    if (bill === 5) {
      five++;
    } else if (bill === 10) {
      ten++;
      five--;
    } else if (bill === 20) {
      if (ten > 0) {
        ten--;
        five--;
      } else {
        five -= 3;
      }
    }

    if (five < 0 || ten < 0) {
      return false;
    }
  }

  return true;
};
// @lc code=end
