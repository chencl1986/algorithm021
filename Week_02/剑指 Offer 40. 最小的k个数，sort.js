/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  let result = []; // 存储结果
  arr.sort((a, b) => a - b); // 将数组从小到大排序

  // 从已排序的数组中取出k个元素
  for (let i = 0; i < k; i++) {
    result.push(arr[i]);
  }

  return result;
};
