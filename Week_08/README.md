# 学习笔记

重写了归并排序的两个版本模板：

1. 

``` javascript
const mergeSort = (nums, compare = (a, b) => a - b) => {
  // 如果数组长度为1，无需排序，直接返回即可
  if (nums.length === 1) {
    return nums;
  }

  const mid = nums.length >> 1; // 计算中间索引
  // 将数组拆分成两段，分别进行排序
  const left = nums.slice(0, mid);
  const right = nums.slice(mid);

  // 将子数组不断拆分，并将每个子数组都进行排序好，之后合并返回
  return merge(mergeSort(left, compare), mergeSort(right, compare), compare);
};

// 将两个子数组排序、合并
const merge = (left, right, compare) => {
  let result = []; // 存储排序后的结果

  // 将两个子数组按照compare的结果排序，直到其中一个被清空
  while (left.length && right.length) {
    result.push(compare(left[0], right[0]) < 0 ? left.shift() : right.shift());
  }

  // 将数组剩余元素存入result，由于left和right已经被排序，因此无需再进行排序
  result.splice(result.length, 0, ...left, ...right);

  return result;
};
```

2. 

``` javascript
const mergeSort = (nums, left, right, compare = (a, b) => a - b) => {
  if (right <= left) {
    return;
  }

  const mid = (left + right) >> 1;
  mergeSort(nums, left, mid, compare);
  mergeSort(nums, mid + 1, right, compare);

  merge(nums, left, right, mid, compare);
};

const merge = (nums, left, right, mid, compare) => {
  let temp = [];
  let i = left;
  let j = mid + 1;
  let k = 0;

  while (i <= mid && j <= right) {
    temp[k++] = compare(nums[i], nums[j]) < 0 ? nums[i++] : nums[j++];
  }

  while (i <= mid) {
    temp[k++] = nums[i++];
  }

  while (j <= right) {
    temp[k++] = nums[j++];
  }

  nums.splice(left, right - left + 1, ...temp);
};
```

我为部分题目写了题解，如下：

其余没写题解的题目，都在作业中写了详细注释，课程结束后会补上。

1. [LeetCode题解：231. 2的幂，位运算：去除二进制中最右边的 1，JavaScript，详细注释](https://leetcode-cn.com/problems/power-of-two/solution/leetcodeti-jie-wei-yun-suan-qu-chu-er-jin-zhi-zh-2)
2. [LeetCode题解：231. 2的幂，位运算取二进制中最右边的1，JavaScript，详细注释](https://leetcode-cn.com/problems/power-of-two/solution/leetcodeti-jie-231-2de-mi-wei-yun-suan-qu-er-jin-z)
3. [LeetCode题解：231. 2的幂，递归，JavaScript，详细注释](https://leetcode-cn.com/problems/power-of-two/solution/leetcodeti-jie-231-2de-mi-di-gui-javascriptxiang-x)
4. [LeetCode题解：231. 2的幂，迭代，JavaScript，详细注释](https://leetcode-cn.com/problems/power-of-two/solution/leetcodeti-jie-231-2de-mi-die-dai-javascriptxiang-)
5. [LeetCode题解：52. N皇后 II，回溯+哈希表，JavaScript，详细注释](https://leetcode-cn.com/problems/n-queens-ii/solution/leetcodeti-jie-52-nhuang-hou-iihui-su-ha-xi-biao-j)
6. [LeetCode题解：51. N 皇后，回溯+哈希表，JavaScript，详细注释](https://leetcode-cn.com/problems/n-queens/solution/leetcodeti-jie-51-n-huang-hou-hui-su-ha-xi-biao-ja)
7. [LeetCode题解：52. N皇后 II，回溯+哈希表，JavaScript，详细注释](https://leetcode-cn.com/problems/n-queens-ii/solution/leetcodeti-jie-52-nhuang-hou-iihui-su-ha-xi-biao-j)
8. [LeetCode题解：242. 有效的字母异位词，数组计数，JavaScript，详细注释](https://leetcode-cn.com/problems/valid-anagram/solution/leetcodeti-jie-242-you-xiao-de-zi-mu-yi-wei-ci-s-2)
9. [LeetCode题解：242. 有效的字母异位词，哈希表两次循环，JavaScript，详细注释](https://leetcode-cn.com/problems/valid-anagram/solution/leetcodeti-jie-242-you-xiao-de-zi-mu-yi-wei-ci-h-2)
10. [LeetCode题解：242. 有效的字母异位词，哈希表一次循环，JavaScript，详细注释](https://leetcode-cn.com/problems/valid-anagram/solution/leetcodeti-jie-242-you-xiao-de-zi-mu-yi-wei-ci-ha-)
11. [LeetCode题解：242. 有效的字母异位词，数组排序，JavaScript，详细注释](https://leetcode-cn.com/problems/valid-anagram/solution/leetcodeti-jie-242-you-xiao-de-zi-mu-yi-wei-ci-shu)
