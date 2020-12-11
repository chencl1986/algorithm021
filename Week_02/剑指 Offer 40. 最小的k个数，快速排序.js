/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  return quickSort(arr, 0, arr.length - 1, k);
};

const quickSort = (nums, left, right, k) => {
  // 如果nums的长度小等于1，无需排序，直接作为结果返回
  if (nums.length <= 1) return nums;

  // 如果nums有长度，就需要排序
  if (left < right) {
    // 将nums从left到right的部分分为两段，其中间值是pivot
    // pivot左侧的值都小于nums[pivot]，pivot右侧的值都大于nums[pivot]
    const pivot = partition(nums, left, right);

    // 如果pivot刚好等于k，表示排序提前完成，可以直接返回结果
    if (pivot === k) {
      return nums.slice(0, k);
    }

    // 按pivot将nums拆分成两端分别排序，由于该题并未要求将数组完全排序，因此只需要将前k个元素整理到一侧即可
    // 由于我们事先不知道pivot与k的大小关系，因此需要根据k的位置进行递归
    pivot > k
      ? quickSort(nums, left, pivot - 1, k)
      : quickSort(nums, pivot + 1, right, k);
  }

  // 完成排序后，将前k个元素返回即可
  return nums.slice(0, k);
};

const partition = (nums, left, right) => {
  let pivot = left; // 以left为中值，比它小的都放在其左侧，比它大的都放在其右侧
  let index = left + 1; // 从left+1开始遍历数组，同时index表示了比nums[pivot]小的值存放的位置

  // 遍历从left+1到right的元素，将其以nums[pivot]为中值拆分成两半
  for (let i = index; i <= right; i++) {
    // 如果当前值比nums[pivot]小，则将其移动到index的位置
    if (nums[i] < nums[pivot]) {
      // 将nums[i]与nums[index]对调
      [nums[i], nums[index]] = [nums[index], nums[i]];
      // 将index移动一位，用于存储下一个值
      index++;
    }
  }

  // 完成循环时，index多移动了一位，要将其回退
  index--;
  // 循环停止时，index位置存储的是小于nums[pivot]的值，而nums[pivot]还在原地
  // 将两者对调，中值会被移动到index的位置，在其左侧的值都比它小
  [nums[pivot], nums[index]] = [nums[index], nums[pivot]];

  // 将新的中值返回，下层递归根据它将数组拆分成两段继续排序
  return index;
};
