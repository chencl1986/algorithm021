/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let result = 0;
  let stack = [];

  for (let i = 0; i < height.length; i++) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      const pop = stack.pop();

      if (!stack.length) {
        break;
      }

      const bottom = height[pop];
      const left = height[stack[stack.length - 1]];
      const right = height[i];
      const width = i - stack[stack.length - 1] - 1;
      const bucketHeight = Math.min(left, right) - bottom;
      result += width * bucketHeight;
    }
    stack.push(i);
  }

  return result;
};
