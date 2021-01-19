/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.head = new ListNode();
  this.tail = new ListNode();
  this.head.next = this.tail;
  this.tail.prev = this.head;
  this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    const node = this.map.get(key);

    if (node.value !== null) {
      this.moveToHead(node);

      return node.value;
    }
  }

  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    const node = this.map.get(key);

    node.value = value;
    this.moveToHead(node);
  } else {
    const node = new ListNode(key, value);

    this.map.set(key, node);
    this.addToHead(node);

    if (this.map.size > this.capacity) {
      const tail = this.removeTail();

      this.map.delete(tail.key);
    }
  }
};

LRUCache.prototype.addToHead = function (node) {
  node.next = this.head.next;
  this.head.next.prev = node;
  this.head.next = node;
  node.prev = this.head;
};

LRUCache.prototype.removeNode = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
};

LRUCache.prototype.moveToHead = function (node) {
  this.removeNode(node);
  this.addToHead(node);
};

LRUCache.prototype.removeTail = function () {
  const tail = this.tail.prev;
  this.removeNode(tail);

  return tail;
};

class ListNode {
  constructor(key, value = null) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next - null;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
