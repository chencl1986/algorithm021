/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
function Node(val = -1) {
  this.val = val
  this.next = null
  this.prev = null
}

var MyCircularQueue = function(k) {
  this.tail = new Node
  this.head = this.tail
  this.capacity = k
  this.index = 0
};

MyCircularQueue.prototype.addIndex = function(index) {
  return (index + 1) % this.capacity
};

MyCircularQueue.prototype.reduceIndex = function(index) {
  return (index + this.capacity - 1) % this.capacity
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.isFull()) {
    return false
  }

  this.tail.val = value
  const node = new Node()
  this.tail.next = node
  node.prev = this.tail
  this.tail = node
  this.index++

  return true
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) {
    return false
  }

  const node = this.head.next
  node.prev = null
  this.head.next = null
  this.head = node
  this.index--

  return true
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  if (this.isEmpty()) {
    return -1
  }

  return this.head.val
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  if (this.isEmpty()) {
    return -1
  }

  return this.tail.prev.val
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return this.index === 0
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  return this.index === this.capacity
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */