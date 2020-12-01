/**
 * initialize your data structure here.
 */
function Node(val = null, min = null) {
  this.val = val
  this.min = min
  this.prev = null
  this.next = null
}

var MinStack = function() {
  this.list = null
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (this.list) {
    const node = new Node(x, Math.min(this.list.min, x))
    this.list.next = node
    node.prev = this.list
    this.list = node
  } else {
    this.list = new Node(x, x)
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.list) {
    const node = this.list
    this.list = this.list.prev
    this.list && (this.list.next = null)
    node.prev = null
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.list.val
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.list.min
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */