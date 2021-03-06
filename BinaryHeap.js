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

  printHeap() {
    console.log('nHeap = ');
    console.log(this.data);
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
maxHeap.deleteItem(7);
maxHeap.printHeap();
