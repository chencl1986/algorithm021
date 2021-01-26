/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  return mergeSort(nums, 0, nums.length - 1);
};

const mergeSort = (nums, left, right) => {
  if (right <= left) {
    return 0;
  }

  const mid = (left + right) >> 1;

  return (
    mergeSort(nums, left, mid) +
    mergeSort(nums, mid + 1, right) +
    merge(nums, left, mid, right)
  );
};

const merge = (nums, left, mid, right) => {
  let m = left;
  let n = mid + 1;
  let count = 0;

  while (m <= mid && n <= right) {
    if (nums[m] > nums[n]) {
      count += mid - m + 1;
      n++;
    } else {
      m++;
    }
  }

  let i = left;
  let j = mid + 1;
  let k = 0;
  let temp = [];

  while (i <= mid && j <= right) {
    temp[k++] = nums[i] < nums[j] ? nums[i++] : nums[j++];
  }

  while (i <= mid) {
    temp[k++] = nums[i++];
  }

  while (j <= right) {
    temp[k++] = nums[j++];
  }

  for (let p = 0; p < temp.length; p++) {
    nums[left + p] = temp[p];
  }

  return count;
};
