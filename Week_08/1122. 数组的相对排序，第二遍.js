/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 *
 * https://leetcode-cn.com/problems/relative-sort-array/description/
 *
 * algorithms
 * Easy (70.94%)
 * Likes:    153
 * Dislikes: 0
 * Total Accepted:    53.3K
 * Total Submissions: 75.2K
 * Testcase Example:  '[2,3,1,3,2,4,6,7,9,2,19]\n[2,1,4,3,9,6]'
 *
 * 给你两个数组，arr1 和 arr2，
 *
 *
 * arr2 中的元素各不相同
 * arr2 中的每个元素都出现在 arr1 中
 *
 *
 * 对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1
 * 的末尾。
 *
 *
 *
 * 示例：
 *
 *
 * 输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
 * 输出：[2,2,2,1,4,3,3,9,6,7,19]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 0
 * arr2 中的元素 arr2[i] 各不相同
 * arr2 中的每个元素 arr2[i] 都出现在 arr1 中
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let map = new Map();
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    map.set(arr1[i], (map.get(arr1[i]) || 0) + 1);
  }

  for (let i = 0; i < arr2.length; i++) {
    result.push(...new Array(map.get(arr2[i])).fill(arr2[i]));
    map.delete(arr2[i]);
  }

  Array.from(map.keys())
    .sort((a, b) => a - b)
    .forEach((value) => {
      result.push(...new Array(map.get(value)).fill(value));
    });

  return result;
};
// @lc code=end
