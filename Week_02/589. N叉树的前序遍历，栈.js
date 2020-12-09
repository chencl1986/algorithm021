/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  let result = [];
  let stack = [];
  root && stack.push(root);

  while (stack.length) {
    const pop = stack.pop();

    result.push(pop.val);

    if (pop.children) {
      for (let i = pop.children.length - 1; i >= 0; i--) {
        stack.push(pop.children[i]);
      }
    }
  }

  return result;
};
// @lc code=end
