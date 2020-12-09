/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let result = 0; // 存储结果
  // 当前桶桶壁高度
  let leftMax = height[0]; // 当前桶左侧最高桶壁
  let rightMax = height[height.length - 1]; // 当前桶右侧最高桶壁
  // 当前桶桶壁索引，同时也是用于计算当前装水数量的水桶索引
  let left = 1; // 当前桶左侧最高桶壁的索引
  let right = height.length - 2; // 当前桶右侧最高桶壁的索引

  // 两个指针向内推进，计算装水总量
  // 两个指针相等时也要计算，否则会遗漏一个水桶
  while (left <= right) {
    // 对于单个水桶来说，它其实只关心最低的桶壁是哪个
    // 而已知的左右桶壁中较小的那个，必然是当前桶的最小桶壁
    // 同时较小的指针指向的就是当前要计算的桶，直接计算当前桶的可装水量即可
    // 完成计算后将当前指针向内移动一步，当前所使用的桶壁高度，需要同时更新
    if (leftMax < rightMax) {
      // 在移动之前先更新当前桶壁的高度
      // 如果当前桶底高度大于桶壁，计算的转水量会为0
      leftMax = Math.max(height[left], leftMax);
      // 计算当前转水量之后，将指针向内移动一位
      result += leftMax - height[left++];
    } else {
      rightMax = Math.max(height[right], rightMax);
      result += rightMax - height[right--];
    }
  }

  return result;
};
// @lc code=end
