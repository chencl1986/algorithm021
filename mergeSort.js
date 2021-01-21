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
