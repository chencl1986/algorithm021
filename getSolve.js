let solutions = document.querySelectorAll(
  '.css-7dwjih-Content .css-1e9rbo3-Link:last-child',
);
let exercises = [
  '盛更多水的容器',
  '移动零',
  '爬楼梯',
  '三数之和',
  '反转链表',
  '两两交换链表中的节点',
  '环形链表',
  '环形链表II',
  'K 个一组翻转链表',
  '有效的括号',
  '最小栈',
  '柱状图中最大的矩形',
  '滑动窗口最大值',
  '删除排序数组中的重复项',
  '旋转数组',
  '合并两个有序链表',
  '合并两个有序数组',
  '两数之和',
  '加1',
  '设计循环双端队列',
  '接雨水',
];
let result = '';
let count = 1;

Array.from(solutions).forEach((solution, index) => {
  for (let i = 0; i < exercises.length; i++) {
    if (solution.innerHTML.match(exercises[i])) {
      result += `${count++}. [${solution.innerHTML}](${
        window.origin + solution.getAttribute('href')
      })\n`;
    }
  }
});

copy(result);
console.log(result);
