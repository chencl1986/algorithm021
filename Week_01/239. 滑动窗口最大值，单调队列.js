/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let result = []
  let dequeue = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i - k] === dequeue[0]) {
      dequeue.shift()
    }

    while (nums[i] > dequeue[dequeue.length - 1]) {
      dequeue.pop()
    }

    dequeue.push(nums[i])

    if (i >= k - 1) {
      result.push(dequeue[0])
    }
  }

  return result
};