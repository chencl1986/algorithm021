/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
function Node(val = -1) {
  this.val = val
  this.next = null
  this.prev = null
}

var MyCircularDeque = function(k) {
  this.head = new Node
  this.tail = this.head
  this.index = 0
  this.capacity = k
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
  if (this.isFull()) {
    return false
  }

  const node = new Node(value)
  node.next = this.head
  this.head.prev = node
  this.head = node
  this.index++

  return true
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
  if (this.isFull()) {
    return false
  }

  this.tail.val = value
  const node = new Node
  this.tail.next = node
  node.prev = this.tail
  this.tail = node
  this.index++

  return true
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
  if (this.isEmpty()) {
    return false
  }

  const node = this.head.next
  this.head.next = null
  node.prev = null
  this.head = node
  this.index--

  return true
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
  if (this.isEmpty()) {
    return false
  }

  const node = this.tail.prev
  this.tail.prev = null
  node.next = null
  this.tail = node
  this.index--

  return true
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
  if (this.isEmpty()) {
    return -1
  }

  return this.head.val
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
  if (this.isEmpty()) {
    return -1
  }

  return this.tail.prev.val
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
  return this.index === 0
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
  return this.index === this.capacity
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */