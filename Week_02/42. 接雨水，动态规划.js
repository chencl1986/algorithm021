/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let result = 0; // 存储结果
  // 创建存储每个捅左边界的数组，设置初始值为0
  let maxLeft = new Array(height.length).fill(0);

  // 循环生成每个桶的左边界，由于最左侧没有桶壁，无法接雨水，因此从1开始生成，第一个左桶壁高度为0
  for (let i = 1; i < maxLeft.length - 1; i++) {
    // 当前桶左侧从0到i-1所有桶壁中最高的一个已经被保存，只需要对比其与i-1桶的高度，即可知道桶i的最高左桶壁
    maxLeft[i] = Math.max(maxLeft[i - 1], height[i - 1]);
  }

  // 创建存储每个捅右边界的数组
  let maxRight = new Array(height.length).fill(0);

  // 循环生成每个桶的右边界，由于最右侧没有桶壁，无法接雨水，因此从最后一个索引开始生成，最后一个右桶壁高度为0
  for (let j = maxRight.length - 2; j > 0; j--) {
    // 当前桶右侧从最后到j+1所有桶壁中最高的一个已经被保存，只需要对比其与j+1桶的高度，即可知道桶j的最高右桶壁
    maxRight[j] = Math.max(maxRight[j + 1], height[j + 1]);
  }

  // 现在一只每个桶的左桶壁和右桶壁的高度，将其减去当前桶底高度，即为可以装水的高度
  for (let k = 0; k < height.length; k++) {
    // 每个桶能装水的最大高度，是两个桶壁的最小值
    let bucketHeight = Math.min(maxLeft[k], maxRight[k]);

    // 由于当前bucketHeight保存的是桶壁最大高度，并未计算当前桶底的高度，在此需要判断一下桶壁是否高于桶底
    if (bucketHeight > height[k]) {
      // 将当前可装水的高度进入结果
      result += bucketHeight - height[k];
    }
  }

  return result;
};
