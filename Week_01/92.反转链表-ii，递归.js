/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  let left = head;
  let reverse = true;

  function recursion(right, m, n) {
    if (n === 1) {
      return right;
    }

    right = right.next;
    n--;

    if (m > 1) {
      left = left.next;
      m--;
    }

    recursion(right, m, n);

    if (right === left || right.next === left) {
      reverse = false;
    }

    if (reverse) {
      const temp = right.val;
      right.val = left.val;
      left.val = temp;
      left = left.next;
    }
  }
  recursion(head, m, n);

  return head;
};
// @lc code=end
