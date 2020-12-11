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
  let result = 0; // 储存总转水量
  let stack = []; // 栈中存储的是水桶的左边界和桶底

  // 遍历所有的柱子，在入栈之前，柱子都是作为水桶的右边界
  for (let right = 0; right < height.length; right++) {
    // 如果右边界比栈顶元素高，表示其与栈中元素形成了一个水桶，可以计算水桶的装水量
    while (height[right] > height[stack[stack.length - 1]]) {
      // 栈顶元素即为当前水桶的桶底，将其弹出并计算桶底高度
      const bucketBottom = height[stack.pop()];

      // 将桶底出栈之后，栈如果为空则表示不存在水桶，退出循环
      if (!stack.length) {
        break;
      }

      const left = stack[stack.length - 1]; // 剩余的栈顶元素为水桶的左边界，获取其索引
      const leftHeight = height[left]; // 获取水桶左边界的高度
      const rightHeight = height[right]; // 获取水桶右边界的高度
      const bucketTop = Math.min(leftHeight, rightHeight); // 水桶左右边界的较小值，即为桶顶高度
      const bucketHeight = bucketTop - bucketBottom; // 水桶的可装水高度为桶顶减去桶底高度
      const width = right - left - 1; // 水桶的实际宽度为左右边界之差减一
      const area = width * bucketHeight; // 计算当前水桶可装水量
      result += area; // 将水量加入总量
    }

    // 当前右边界可以作为下一个水桶的左边界，因此需要入栈
    stack.push(right);
  }

  return result;
};
// @lc code=end
