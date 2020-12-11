const quickSort = (nums, left, right, k) => {
  // 如果nums的长度小等于1，无需排序，直接作为结果返回
  if (nums.length <= 1) return nums;

  // 如果nums有长度，就需要排序
  if (left < right) {
    // 将nums从left到right的部分分为两段，其中间值是pivot
    // pivot左侧的值都小于nums[pivot]，pivot右侧的值都大于nums[pivot]
    const pivot = partition(nums, left, right);

    // 将拆分后的nums分别继续排序
    quickSort(nums, left, pivot - 1);
    quickSort(nums, pivot + 1, right);
  }

  // 完成所有递归后，nums已经从小到大排序
  return nums;
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

let arr = [0, 1, 2, 1];
console.log(quickSort(arr, 0, arr.length - 1));
