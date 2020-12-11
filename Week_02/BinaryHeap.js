class BinaryHeap {
  constructor(compare) {
    this.heap = []; // 使用数组存储堆
    this.compare = compare; // 堆元素的排序函数
  }

  // 向堆插入元素
  insert(value) {
    this.insertAt(this.heap.length, value);
  }

  // 将元素插入到index位置
  insertAt(index, value) {
    // 先将元素插入到指定的位置
    this.heap[index] = value;
    let fatherIndex = index;
    // 对比当前节点与其父节点，如果当前节点更小就交换它们
    // Math.floor((index - 1) / 2)是父节点在数组中的索引
    while (
      index > 0 &&
      // 使用传入的对比函数比较大小
      this.compare(
        value,
        this.heap[(fatherIndex = Math.floor((index - 1) / 2))]
      ) < 0
    ) {
      // 将父节点移动到当前位置
      this.heap[index] = this.heap[fatherIndex];
      // 将插入的值移动到父节点位置
      this.heap[fatherIndex] = value;
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
    if (this.heap.length === 0) {
      return;
    }

    let value = this.heap[index]; // 将要删除的元素缓存
    let parent = index; // 以当前元素为起始，向下整理堆

    // 不断向子节点整理堆，每次循环将子节点中经过compare方法对比后较大者与父节点调换
    while (parent < this.heap.length) {
      let left = parent * 2 + 1; // 左子节点索引
      let right = parent * 2 + 2; // 右子节点索引

      // 没有左子节点，表示当前节点已经是最后一个节点
      if (left >= this.heap.length) {
        break;
      }

      // 没有右子节点，则直接将左子节点提前到父节点即可
      // 该左子节点即为最后一个节点
      if (right >= this.heap.length) {
        this.heap[parent] = this.heap[left];
        parent = left;
        break;
      }

      // 使用compare方法比较左右子节点的大小，更大的补到父节点
      if (this.compare(this.heap[left], this.heap[right]) < 0) {
        // 由于被删除的节点已保存，此处只需要将子节点复制到当前父节点即可
        this.heap[parent] = this.heap[left];
        // 完成移动后将父节点指针移动到子节点，供下一次整理使用
        parent = left;
      } else {
        this.heap[parent] = this.heap[right];
        parent = right;
      }
    }

    // 查看最后的空位是不是最后的叶子节点
    if (parent < this.heap.length - 1) {
      // 如果还未整理到叶子节点，则继续向下整理
      this.insertAt(parent, this.heap.pop());
    } else {
      // 当完成整理时，最后一个节点即为多于元素，直接弹出数组即可
      this.heap.pop();
    }

    // 返回被删除的元素
    return value;
  }

  printHeap() {
    console.log('nHeap = ');
    console.log(this.heap);
  }
}

let maxHeap = new BinaryHeap((a, b) => b - a);
maxHeap.insert(10);
maxHeap.insert(4);
maxHeap.insert(9);
maxHeap.insert(1);
maxHeap.insert(7);
maxHeap.insert(5);
maxHeap.insert(3);

maxHeap.printHeap();
maxHeap.delete(0);
maxHeap.printHeap();
maxHeap.delete(2);
maxHeap.printHeap();
