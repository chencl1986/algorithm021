/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0; // 查找的左边界
  let right = nums.length - 1; // 查找的右边界

  // 进行二分查找，当左右指针相遇时退出循环
  while (left <= right) {
    // 取中间值，答案必然中间值的左右其中一方
    const mid = (left + right) >> 1;

    // 当中值与目标相等时，表示查找成功，返回索引
    if (nums[mid] === target) {
      return mid;
    }

    // 判断target是否在前半部分
    if (
      // 如果数组在前半部分被旋转
      // nums[0]大于nums[mid]，表示旋转点在前半部分
      (nums[mid] < nums[0] &&
        // target在0到旋转点之间
        (nums[0] <= target ||
          // target在旋转点到中点之间
          target <= nums[mid])) ||
      // 如果数组在后半部分被旋转
      // 数组在前半部分是单调递增
      (nums[0] < nums[mid] &&
        // target在nums[0]和nums[mid]之间
        nums[0] <= target &&
        target < nums[mid])
    ) {
      // 向前半部分查找target
      right = mid - 1;
    } else {
      // 向后半部分查找target
      left = mid + 1;
    }
  }

  // 如果正常退出循环，表示没有找到target，返回-1
  return -1;
};
// @lc code=end
