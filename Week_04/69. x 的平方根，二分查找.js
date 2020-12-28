/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0; // 查找的左边界
  let right = x; // 查找的右边界

  // 进行二分查找，当左右指针相遇时退出循环
  while (left <= right) {
    // 取中间值，答案必然中间值的左右其中一方
    // 使用这段代码也是同样效果
    // const mid = Math.floor((right + left) / 2);
    const mid = (left + right) >> 1;

    // 如果mid的平方大于x，表示最终结果在右半部分
    if (mid ** 2 > x) {
      // 重新确定右边界，下次循环在右半部分查找结果
      right = mid - 1;
    } else {
      // 如果mid的平方小于等于x，表示最终结果在左半部分
      // 重新确定左边界，下次循环在左半部分查找结果
      left = mid + 1;
    }
  }

  // 由于最后一次循环前，left和right相等，即mid=left=right
  // 此时mid的频繁只有两种可能情况，即为mid的平方大于或等于x
  // mid大于x时，最终结果在mid到mid-1之间，经过四舍五入后为mid，也就是退出循环后的right的值
  // mid等于x时，退出循环后，right即为mid的值
  // 两种情况退出后，right都是最终结果，因此只要返回right即可
  return right;
};
// @lc code=end
