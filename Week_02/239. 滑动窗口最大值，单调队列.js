/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let result = [];
  let dequeue = [];

  for (let i = 0; i < nums.length; i++) {
    if (dequeue[0] === nums[i - k]) {
      dequeue.shift();
    }

    while (dequeue[dequeue.length - 1] < nums[i]) {
      dequeue.pop();
    }

    dequeue.push(nums[i]);

    if (i >= k - 1) {
      result.push(dequeue[0]);
    }
  }

  return result;
};
// @lc code=end
