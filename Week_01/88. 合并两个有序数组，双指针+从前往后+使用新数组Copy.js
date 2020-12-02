/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let arr = [];
  let i = 0;
  let j = 0;

  while (i < m && j < n) {
    if (nums1[i] <= nums2[j]) {
      arr.push(nums1[i++]);
    } else {
      arr.push(nums2[j++]);
    }
  }

  if (i !== m) {
    arr.push(...nums1.slice(i, m));
  } else {
    arr.push(...nums2.slice(j));
  }

  nums1.splice(0, m + n, ...arr);
};
// @lc code=end
