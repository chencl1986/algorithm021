/*
 * @lc app=leetcode.cn id=493 lang=javascript
 *
 * [493] 翻转对
 *
 * https://leetcode-cn.com/problems/reverse-pairs/description/
 *
 * algorithms
 * Hard (33.67%)
 * Likes:    253
 * Dislikes: 0
 * Total Accepted:    22.4K
 * Total Submissions: 66.5K
 * Testcase Example:  '[1,3,2,3,1]'
 *
 * 给定一个数组 nums ，如果 i < j 且 nums[i] > 2*nums[j] 我们就将 (i, j) 称作一个重要翻转对。
 *
 * 你需要返回给定数组中的重要翻转对的数量。
 *
 * 示例 1:
 *
 *
 * 输入: [1,3,2,3,1]
 * 输出: 2
 *
 *
 * 示例 2:
 *
 *
 * 输入: [2,4,3,5,1]
 * 输出: 3
 *
 *
 * 注意:
 *
 *
 * 给定数组的长度不会超过50000。
 * 输入数组中的所有数字都在32位整数的表示范围内。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  return mergeSort(nums, 0, nums.length - 1);
};

const mergeSort = (nums, left, right) => {
  if (right <= left) {
    return 0;
  }

  const mid = (left + right) >> 1;

  return (
    mergeSort(nums, left, mid) +
    mergeSort(nums, mid + 1, right) +
    merge(nums, left, mid, right)
  );
};

const merge = (nums, left, mid, right) => {
  let i = left;
  let j = mid + 1;
  let k = 0;
  let temp = [];
  let m = left;
  let n = j;
  let count = 0;

  /* while (m <= mid) {
    while (n <= right && nums[m] > 2 * nums[n]) {
      n++;
    }
    count += n - mid - 1;
    m++;
  } */

  while (m <= mid && n <= right) {
    if (nums[m] > nums[n] * 2) {
      count += mid - m + 1;
      n++;
    } else {
      m++;
    }
  }

  while (i <= mid && j <= right) {
    temp[k++] = nums[i] < nums[j] ? nums[i++] : nums[j++];
  }

  while (i <= mid) {
    temp[k++] = nums[i++];
  }

  while (j <= right) {
    temp[k++] = nums[j++];
  }

  for (let p = 0; p < temp.length; p++) {
    nums[left + p] = temp[p];
  }

  return count;
};
// @lc code=end
