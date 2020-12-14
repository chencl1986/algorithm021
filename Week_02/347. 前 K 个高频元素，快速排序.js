/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = new Map(); // 用Map记录所有数字出现的频率

  // 遍历数组，记录每个数字的出现频率，将其保存在Map中
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  // 将数字和频率的关系转换成数组，用于排序。
  const numsWithFrequency = [...map.entries()];

  // 使用快速排序，将数组按频率从大到小排序，并返回前k个数字
  return quickSort(numsWithFrequency, 0, numsWithFrequency.length - 1, k);
};

const quickSort = (nums, left, right, k) => {
  // 如果nums的长度小等于1，无需排序，直接将数字取出返回
  if (nums.length <= 1) return nums.map(([num]) => num);

  // 如果nums有长度，就需要排序
  if (left < right) {
    // 将nums从left到right的部分分为两段，其中间值是pivot
    // pivot左侧的值都小于nums[pivot]，pivot右侧的值都大于nums[pivot]
    const pivot = partition(nums, left, right);

    // 如果pivot刚好等于k，表示排序提前完成，可以直接返回结果
    if (pivot === k) {
      // 将前k个元素转换为数字返回
      return nums.slice(0, k).map(([num]) => num);
    }

    // 按pivot将nums拆分成两端分别排序，由于该题并未要求将数组完全排序，因此只需要将前k个元素整理到一侧即可
    // 由于我们事先不知道pivot与k的大小关系，因此需要根据k的位置进行递归
    pivot > k
      ? quickSort(nums, left, pivot - 1, k)
      : quickSort(nums, pivot + 1, right, k);
  }

  // 完成排序后，将前k个元素转换为数字返回即可
  return nums.slice(0, k).map(([num]) => num);
};

const partition = (nums, left, right) => {
  let pivot = left; // 以left为中值，比它大的都放在其左侧，比它大的都放在其右侧
  let index = left + 1; // 从left+1开始遍历数组，同时index表示了频率比nums[pivot]大的值存放的位置

  // 遍历从left+1到right的元素，将其以nums[pivot]为中值拆分成两半
  for (let i = index; i <= right; i++) {
    // 如果当前频率比nums[pivot]大，则将其移动到index的位置
    if (nums[i][1] > nums[pivot][1]) {
      // 将nums[i]与nums[index]对调
      [nums[i], nums[index]] = [nums[index], nums[i]];
      // 将index移动一位，用于存储下一个值
      index++;
    }
  }

  // 完成循环时，index多移动了一位，要将其回退
  index--;
  // 循环停止时，index位置存储的是频率大于nums[pivot]的值，而nums[pivot]还在原地
  // 将两者对调，中值会被移动到index的位置，在其左侧的频率都比它大
  [nums[pivot], nums[index]] = [nums[index], nums[pivot]];

  // 将新的中值返回，下层递归根据它将数组拆分成两段继续排序
  return index;
};
