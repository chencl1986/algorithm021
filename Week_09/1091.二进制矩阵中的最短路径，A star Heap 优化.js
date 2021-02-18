/*
 * @lc app=leetcode.cn id=1091 lang=javascript
 *
 * [1091] 二进制矩阵中的最短路径
 *
 * https://leetcode-cn.com/problems/shortest-path-in-binary-matrix/description/
 *
 * algorithms
 * Medium (35.98%)
 * Likes:    81
 * Dislikes: 0
 * Total Accepted:    15K
 * Total Submissions: 41.6K
 * Testcase Example:  '[[0,1],[1,0]]'
 *
 * 在一个 N × N 的方形网格中，每个单元格有两种状态：空（0）或者阻塞（1）。
 *
 * 一条从左上角到右下角、长度为 k 的畅通路径，由满足下述条件的单元格 C_1, C_2, ..., C_k 组成：
 *
 *
 * 相邻单元格 C_i 和 C_{i+1} 在八个方向之一上连通（此时，C_i 和 C_{i+1} 不同且共享边或角）
 * C_1 位于 (0, 0)（即，值为 grid[0][0]）
 * C_k 位于 (N-1, N-1)（即，值为 grid[N-1][N-1]）
 * 如果 C_i 位于 (r, c)，则 grid[r][c] 为空（即，grid[r][c] == 0）
 *
 *
 * 返回这条从左上角到右下角的最短畅通路径的长度。如果不存在这样的路径，返回 -1 。
 *
 *
 *
 * 示例 1：
 *
 * 输入：[[0,1],[1,0]]
 *
 * 输出：2
 *
 *
 *
 * 示例 2：
 *
 * 输入：[[0,0,0],[1,1,0],[1,1,0]]
 *
 * 输出：4
 *
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= grid.length == grid[0].length <= 100
 * grid[i][j] 为 0 或 1
 *
 *
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
  // [[1,0,0],[1,1,0],[1,1,0]]
  // [[1,0,0],[1,1,0],[1,1,0]]
  // [[0,1,0,0],[0,0,0,1],[0,0,0,0],[0,0,0,0]]
  // [[0,0,0,0,1],[1,0,0,0,0],[0,1,0,1,0],[0,0,0,1,1],[0,0,0,1,0]]
  // [[0,0,1,0,1,1],[1,0,0,1,0,0],[0,1,0,1,0,0],[1,0,1,0,0,0],[0,1,0,1,0,0],[0,0,0,0,0,0]]
  // [[0,0,1,0,0,0,0],[0,1,0,0,0,0,1],[0,0,1,0,1,0,0],[0,0,0,1,1,1,0],[1,0,0,1,1,0,0],[1,1,1,1,1,0,1],[0,0,1,0,0,0,0]]
  // [[0,0,0,0,1,1,1,1,0],[0,1,1,0,0,0,0,1,0],[0,0,1,0,0,0,0,0,0],[1,1,0,0,1,0,0,1,1],[0,0,1,1,1,0,1,0,1],[0,1,0,1,0,0,0,0,0],[0,0,0,1,0,1,0,0,0],[0,1,0,1,1,0,0,0,0],[0,0,0,0,0,1,0,1,0]]
  // 这个Case如果heuristic使用欧氏距离计算无法通过
  // [[0,0,1,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0],[0,1,1,0,1,1,1,1,1],[0,0,0,1,0,0,0,0,0],[1,1,0,0,0,1,0,0,0],[1,0,1,0,0,1,0,0,1],[1,1,1,1,0,0,1,0,0],[1,0,0,1,0,0,1,1,1],[0,0,0,0,0,0,0,0,0]]
  const m = grid.length - 1; // 行和列的的最后元素索引
  const colNum = grid.length; // 列的数量，即每行的元素数量
  const destination = colNum ** 2 - 1; // 终点的编号

  // 当起点和终点为1时，一定无法到达，返回-1
  if (grid[0][0] === 1 || grid[m][m] === 1) {
    return -1;
  }

  // 要传入堆中的排序函数
  const compare = (a, b) => {
    // 按照每个节点的优先级从小到大排序
    // 优先级表示估算出的从起点到终点的总长度
    return a.priority - b.priority;
  };
  // 估价函数，用于估算当前坐标到终点的距离，也可以理解为走到终点需要的步数
  const heuristic = (x, y) => {
    // 这里使用的是“曼哈顿距离”进行估算，由于m必然大于等于x和y，因此不需要取绝对值
    return Math.max(m - x, m - y);
    // 此处若使用欧氏距离计算，无法提交成功
    // return Math.sqrt((m - x) ** 2 + (m - y) ** 2);
  };

  // 缓存从起点走到每个点的距离，也可以理解为步数
  const distanceMap = new Map([[0, 1]]);
  // 可以使用Map缓存经过的所有位置，最终绘制出最短路径，但这题并不需要
  // let routeMap = new Map();
  // 创建一个小顶堆，用于给节点排序，每次循环只需要取出堆顶元素，也就是每次都走预估的路径总长最小的点
  let binaryHeap = new BinaryHeap(compare);
  // 向堆中插入起点[0,0]，编号为0，优先级可以是任意数值
  binaryHeap.insert({node: 0, priority: 0});
  // 每次可以走的方向，根据题意可以走8个方向，但实际上都是从左上走向右下，不需要往回走
  const direction = [
    [-1, 1], // 右上
    [0, 1], // 右
    [1, 1], // 右下
    [1, 0], // 下
    [1, -1], // 左下
  ];

  // 不断取出堆顶元素，如果堆被清空，表示没有找到路径
  while (binaryHeap.size()) {
    // 取出堆顶元素，即为当前预估能够得到最短路径的节点编号
    let {node} = binaryHeap.deleteHead();
    // 计算当前编号对应的横纵坐标
    const x = Math.floor(node / colNum);
    const y = node % colNum;

    // 如果当前坐标的值为1，表示无法行走，则跳过
    if (grid[x][y] === 1) {
      continue;
    }

    // 如果当前节点是终点，表示找到了最短路径
    if (node === destination) {
      // 可以用这段代码生成走过的路径
      /* const target = node;
      grid[x][y] = 8;
      while (routeMap.has(node)) {
        node = routeMap.get(node);
        const x = Math.floor(node / colNum);
        const y = node % colNum;
        grid[x][y] = 8;
      }
      console.log(grid);
      return distanceMap.get(target); */
      // distanceMap中存储的是终点的路径长度
      return distanceMap.get(node);
    }

    // 将当前坐标标记为1，表示已经走过，避免重复行走
    grid[x][y] = 1;

    // 计算出当前坐标所有可行走的位置
    for (let i = 0; i < direction.length; i++) {
      // 计算出下一步的横纵坐标
      const newX = x + direction[i][0];
      const newY = y + direction[i][1];

      // 如果新坐标超出网格，或者被标记为1，表示无法行走，则跳过
      if (
        newX < 0 ||
        newY < 0 ||
        newX > m ||
        newY > m ||
        grid[newX][newY] === 1
      ) {
        continue;
      }

      // 计算出可行走坐标的编号
      const newNode = newX * colNum + newY;
      // 从上一个节点，再走一步就到当前节点，走过的距离加1。这个距离就是从起点走到当前节点经过的距离
      const distance = distanceMap.get(node) + 1;
      // 将当前节点及其优先级插入堆中，进行排序
      binaryHeap.insert({
        // 缓存当前节点，即为其在网格中的编号
        node: newNode,
        // 从起点走到当前位置的距离，加上估算出的从当前位置走到终点的距离。就是如果走这个位置，整条路径的长度
        priority: distance + heuristic(newX, newY),
      });

      // 如果当前节点未在distanceMap中储存过，需要进行缓存
      // 如果已缓存的距离比此次计算的距离大，表示之前缓存的距离不是最优的，需要更新
      // 由于每次都会进行一次更新，因此distanceMap和routeMap中始终保存了最优解
      if (!distanceMap.has(newNode) || distanceMap.get(newNode) > distance) {
        // 缓存从起点走到当前节点的距离
        distanceMap.set(newNode, distance);
        // 在routeMap中存储当前节点的前一个节点，走到终点后，可以从中循环生成经过路径
        // routeMap.set(newNode, node);
      }
    }
  }

  // 如果堆被清空，表示没有找到路径，返回-1
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
