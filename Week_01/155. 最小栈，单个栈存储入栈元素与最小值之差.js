/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = []
  this.min = 0
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (this.stack.length) {
    this.stack.push(x - this.min)

    if (x < this.min) {
      this.min = x
    }
  } else {
    this.min = x
    this.stack.push(x - this.min)
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const pop = this.stack.pop()

  if (pop < 0) {
    this.min = this.min - pop
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  const top = this.stack[this.stack.length - 1]

  if (top < 0) {
    return this.min
  } else {
    return this.min + top
  }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */