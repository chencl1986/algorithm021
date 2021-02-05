/*
 * @lc app=leetcode.cn id=1091 lang=javascript
 *
 * [1091] 二进制矩阵中的最短路径
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  // 调试Case
  // [[0,0,0],[0,0,0],[0,0,0]]
  // [[0,0,0],[1,1,0],[1,1,0]]
  // [[0,1,0,0],[0,0,0,1],[0,0,0,0],[0,0,0,0]]
  // [[0,0,0,0,1],[1,0,0,0,0],[0,1,0,1,0],[0,0,0,1,1],[0,0,0,1,0]]
  // [[0,0,1,0,1,1],[1,0,0,1,0,0],[0,1,0,1,0,0],[1,0,1,0,0,0],[0,1,0,1,0,0],[0,0,0,0,0,0]]
  // [[0,0,1,0,0,0,0],[0,1,0,0,0,0,1],[0,0,1,0,1,0,0],[0,0,0,1,1,1,0],[1,0,0,1,1,0,0],[1,1,1,1,1,0,1],[0,0,1,0,0,0,0]]
  // [[0,0,0,0,1,1,1,1,0],[0,1,1,0,0,0,0,1,0],[0,0,1,0,0,0,0,0,0],[1,1,0,0,1,0,0,1,1],[0,0,1,1,1,0,1,0,1],[0,1,0,1,0,0,0,0,0],[0,0,0,1,0,1,0,0,0],[0,1,0,1,1,0,0,0,0],[0,0,0,0,0,1,0,1,0]]
  // 缓存矩阵的终点位置
  const m = grid.length - 1;
  const n = grid[0].length - 1;
  const row = grid[0].length;

  // 当起点和终点为1时，必然无法到达终点
  if (grid[0][0] === 1 || grid[m][n] === 1) {
    return -1;
  }

  // 如果矩阵只有1个点，且为0，路径为1
  if (m === 0 && n === 0 && grid[0][0] === 0) {
    return 1;
  }

  const start = [0, 0];
  let visited = new Set();
  let routeMap = new Map();
  let distanceMap = new Map([start]);
  const heuristic = (a, b) => {
    return Math.max(Math.abs(m - a), Math.abs(n - b));
  };
  const compare = (a, b) => {
    return a[1] - b[1];
  };
  let binaryHeap = new BinaryHeap(compare);
  binaryHeap.insert(start);
  // 可以向四周所有方向行走，缓存8个方向
  const direction = [
    [1, 0], // 下
    [0, 1], // 右
    [1, 1], // 右下
    [-1, 1], // 右上
    [1, -1], // 左下
    // 一下3种都是往回走，无需判断
    // [-1, 0], // 上
    // [0, -1], // 左
    // [-1, -1], // 左上
  ];
  // 如果队列中有值，则继续搜索
  while (binaryHeap.size()) {
    // 出队一个坐标，计算它可以行走的下一步位置
    let node = binaryHeap.deleteHead()[0];
    const x = Math.floor(node / row);
    const y = node % row;

    if (visited.has(node)) {
      continue;
    }
    if (x === m && y === n) {
      let route = [node];
      grid[x][y] = 8;

      while (routeMap.has(node)) {
        node = routeMap.get(node);
        route.unshift(node);
        grid[x][y] = 8;
      }
      // console.log(route);
      console.log(grid);

      return route.length;
    }
    grid[x][y] = 8;
    console.log(x, y, visited.has(node));
    visited.add(node);

    for (let i = 0; i < direction.length; i++) {
      // 下一步可以向四周行走，计算出相应新坐标
      const newX = x + direction[i][0];
      const newY = y + direction[i][1];
      const newNode = newX * row + newY;

      if (
        !visited.has(newNode) &&
        // 判断新坐标不可超出矩阵
        newX >= 0 &&
        newY >= 0 &&
        newX <= m &&
        newY <= n &&
        // 下一步可以行走，才进行记录
        grid[newX][newY] !== 1
      ) {
        // 将下一步的坐标存入队列，用于下一层循环
        const nextStep = distanceMap.get(node) + 1;
        binaryHeap.insert([newNode, nextStep + heuristic(newX, newY)]);

        if (!distanceMap.has(newNode) || nextStep < distanceMap.get(newNode)) {
          distanceMap.set(newNode, nextStep);
          routeMap.set(newNode, node);
        }
      }
    }
  }

  return -1;
};

class BinaryHeap {
  constructor(compare) {
    this.data = []; // 使用数组存储堆
    this.compare = compare; // 堆元素的排序函数
  }

  // 获取堆的元素数量
  size() {
    return this.data.length;
  }

  // 向堆中插入多个元素
  insertMultiple(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.insert(arr[i]);
    }
  }

  // 向堆插入元素
  insert(value) {
    this.insertAt(this.data.length, value);
  }

  // 将元素插入到index位置
  insertAt(index, value) {
    // 先将元素插入到指定的位置
    this.data[index] = value;
    let fatherIndex = index;
    // 对比当前节点与其父节点，如果当前节点更小就交换它们
    // Math.floor((index - 1) / 2)是父节点在数组中的索引
    while (
      index > 0 &&
      // 使用compare比较大小
      this.compare(
        value,
        this.data[(fatherIndex = Math.floor((index - 1) / 2))],
      ) < 0
    ) {
      // 将父节点移动到当前位置
      this.data[index] = this.data[fatherIndex];
      // 将插入的值移动到父节点位置
      this.data[fatherIndex] = value;
      // 更新索引为父节点索引，继续下一次循环
      index = fatherIndex;
    }
  }

  // 删除最大节点
  deleteHead() {
    return this.delete(0);
  }

  // 将指定位置的元素删除
  delete(index) {
    // 如果堆为空，则不进行删除操作
    if (this.data.length === 0) {
      return;
    }

    let value = this.data[index]; // 将要删除的元素缓存
    let parent = index; // 以当前元素为起始，向下整理堆

    // 不断向子节点整理堆，每次循环将子节点中经过compare方法对比后较大者与父节点调换
    while (parent < this.data.length) {
      let left = parent * 2 + 1; // 左子节点索引
      let right = parent * 2 + 2; // 右子节点索引

      // 没有左子节点，表示当前节点已经是最后一个节点
      if (left >= this.data.length) {
        break;
      }

      // 没有右子节点，则直接将左子节点提前到父节点即可
      // 该左子节点即为最后一个节点
      if (right >= this.data.length) {
        this.data[parent] = this.data[left];
        parent = left;
        break;
      }

      // 使用compare方法比较左右子节点的大小，更大的补到父节点
      if (this.compare(this.data[left], this.data[right]) < 0) {
        // 由于被删除的节点已保存，此处只需要将子节点复制到当前父节点即可
        this.data[parent] = this.data[left];
        // 完成移动后将父节点指针移动到子节点，供下一次整理使用
        parent = left;
      } else {
        this.data[parent] = this.data[right];
        parent = right;
      }
    }

    // 查看最后的空位是不是最后的叶子节点
    if (parent < this.data.length - 1) {
      // 如果还未整理到叶子节点，则继续向下整理
      this.insertAt(parent, this.data.pop());
    } else {
      // 当完成整理时，最后一个节点即为多于元素，直接弹出数组即可
      this.data.pop();
    }

    // 返回被删除的元素
    return value;
  }

  // 删除指定元素
  deleteItem(value) {
    // 查找元素在堆中对应的索引
    const index = this.data.findIndex((item) => item === value);

    // 根据索引删除相应元素
    if (typeof index === 'number') {
      this.delete(index);
    }
  }

  // 删除指定元素
  deleteItem(value) {
    // 查找元素在堆中对应的索引
    const index = this.data.findIndex((item) => item === value);

    // 根据索引删除相应元素
    if (typeof index === 'number') {
      this.delete(index);
    }
  }

  // 读取堆顶元素
  peek() {
    return this.data[0];
  }

  // 清除所有元素
  clear() {
    this.data = [];
  }
}
// @lc code=end

[
  [0, 0, 1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 1],
  [0, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 1, 1, 1, 0],
  [1, 0, 0, 1, 1, 0, 0],
  [1, 1, 1, 1, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 0],
];
[
  [7, 7, 1, 7, 0, 0, 0],
  [7, 1, 7, 7, 7, 0, 1],
  [7, 7, 1, 7, 1, 7, 0],
  [7, 7, 7, 1, 1, 1, 7],
  [1, 7, 7, 1, 1, 7, 7],
  [1, 1, 1, 1, 1, 7, 1],
  [0, 0, 1, 0, 0, 0, 8],
];
[
  [7, 7, 7, 0, 1, 1, 1, 1, 0],
  [7, 1, 1, 7, 0, 0, 0, 1, 0],
  [7, 7, 1, 7, 7, 0, 0, 0, 0],
  [1, 1, 7, 7, 1, 7, 0, 1, 1],
  [0, 0, 1, 1, 1, 7, 1, 0, 1],
  [0, 1, 0, 1, 0, 7, 7, 0, 0],
  [0, 0, 0, 1, 0, 1, 7, 7, 0],
  [0, 1, 0, 1, 1, 0, 0, 7, 7],
  [0, 0, 0, 0, 0, 1, 0, 1, 7],
];
