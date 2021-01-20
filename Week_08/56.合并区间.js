/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let result = []; // 存出结果

  // 先将intervals按照第一个索引排序，这样相近的去见就排列在一起
  // 区间只要依次对比，就可以判断是否需要合并，并且不会出现遗漏
  intervals.sort((a, b) => a[0] - b[0]);

  // 先将第一个存入结果，以便与之后的区间对比
  result.push(intervals[0]);

  // 从1开始，逐个判断区间是否需要合并
  for (let i = 1; i < intervals.length; i++) {
    // 如果当前区间的左边界大于上一个的右边界，两个区间必然无法合并
    if (intervals[i][0] > result[result.length - 1][1]) {
      result.push(intervals[i]);
    } else if (result[result.length - 1][1] <= intervals[i][1]) {
      // 如果当前区间的左边界小等于上一个区间的右边界
      // 并且上一个区间的右边界小等于当前区间的右边界
      // 满足这两个条件的话，区间可以黑榜
      // 由于当前是else判断，intervals[i][0] <= result[i - 1][1]可以省略
      result[result.length - 1][1] = intervals[i][1];
    }
  }

  return result;
};
// @lc code=end
