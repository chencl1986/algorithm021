/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let max = 0

  for (let i = 0; i < heights.length; i++) {
    let j = i
    let k = i

    while (heights[j - 1] >= heights[i]) {
      j--
    }

    while (heights[k + 1] >= heights[i]) {
      k++
    }

    max = Math.max(max, heights[i] * (k - j + 1))
  }

  return max
};