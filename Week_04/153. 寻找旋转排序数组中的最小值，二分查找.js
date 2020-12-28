/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0; // 二分查找左边界
  let right = nums.length - 1; // 二分查找右边界

  // 由于该题没有目标值可供判断，因此循环需要在left等于right之前退出
  // 两个指针相遇时，表示找到了结果
  while (left < right) {
    // 取两个指针的中点
    const mid = (left + right) >> 1;

    // nums[mid] < nums[right]时，表示旋转点在左半边
    if (nums[mid] < nums[right]) {
      // 由于mid总是向下取整，因此在极限情况，区间只剩两个值时，mid=left，对应用例[3,1,2]
      // 并且该题没有中点等于目标值的判断，因此中点必须始终包含在区间内
      right = mid;
    }
    // nums[mid] > nums[right]时，表示旋转点在右半边
    else if (nums[mid] > nums[right]) {
      // 此时中点的值必然不是最小值，因此left可以等于mid+1
      left = mid + 1;
    }
  }

  // 退出循环时，左右指针必然相遇，并且指向最小值，将其返回即可
  return nums[left];
};
// @lc code=end
