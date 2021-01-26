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
