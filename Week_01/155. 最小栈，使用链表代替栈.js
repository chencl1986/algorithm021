/**
 * initialize your data structure here.
 */
function Node(val = null, min = null) {
  this.val = val
  this.min = min
  this.next = null
}

var MinStack = function() {
  this.head = null
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
 if (this.head) {
   const node = new Node(x, Math.min(this.head.min, x))
   node.next = this.head
   this.head = node
 } else {
   this.head = new Node(x, x)
 }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.head) {
    this.head = this.head.next
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  if (this.head) {
    return this.head.val
  }

  return null
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  if (this.head) {
    return this.head.min
  }

  return null
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */