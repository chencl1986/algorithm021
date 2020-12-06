let solutions = document.querySelectorAll(
  '.css-7dwjih-Content .css-1e9rbo3-Link:last-child',
);
let exercises = [
  // '盛更多水的容器',
  // '移动零',
  // '爬楼梯',
  // '三数之和',
  // '反转链表',
  // '两两交换链表中的节点',
  // '环形链表',
  // '环形链表II',
  // 'K 个一组翻转链表',
  // '有效的括号',
  // '最小栈',
  // '柱状图中最大的矩形',
  // '滑动窗口最大值',
  // '删除排序数组中的重复项',
  // '旋转数组',
  // '合并两个有序链表',
  // '合并两个有序数组',
  // '两数之和',
  // '加1',
  // '设计循环双端队列',
  // '接雨水',
  'container-with-most-water',
  'move-zeroes',
  'climbing-stairs',
  '3sum',
  'reverse-linked-list',
  'swap-nodes-in-pairs',
  'linked-list-cycl',
  'linked-list-cycle-ii',
  'reverse-nodes-in-k-group',
  'valid-parentheses',
  'min-stack',
  'largest-rectangle-in-histogra',
  'sliding-window-maximu',
  'remove-duplicates-from-sorted-array',
  'rotate-array',
  'merge-two-sorted-lists',
  'merge-sorted-array',
  'two-sum',
  'plus-one',
  'design-circular-dequ',
  'trapping-rain-water',
];
let exerciseMap = new Map(
  exercises.map((exercise, index) => [exercise, index]),
);
let resultArr = new Array(exerciseMap.size);
let result = '';
let count = 1;
let test = 0;

console.log(solutions);
console.log(exerciseMap);
console.log(resultArr);
Array.from(solutions).forEach((solution) => {
  for (const [exercise, index] of exerciseMap) {
    if (solution.getAttribute('href').match(exercise)) {
      console.log(
        solution.innerHTML,
        exercise,
        solution.innerHTML.match(exercise),
        index,
      );
      const str = `[${solution.innerHTML}](${
        window.origin + solution.getAttribute('href')
      })\n`;
      if (resultArr[index]) {
        resultArr[index].push(str);
      } else {
        resultArr[index] = [str];
      }
    }
  }
});

console.log(test);
console.log(resultArr);
for (let i = 0; i < resultArr.length; i++) {
  for (let j = 0; j < resultArr[i].length; j++) {
    result += `${count++}. ${resultArr[i][j]}`;
  }
}

copy(result);
console.log(result);
