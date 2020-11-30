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
  let prev = null;
  let curr = head;

  while (m > 1) {
    prev = curr;
    curr = curr.next;
    m--;
    n--;
  }

  let firstListTail = prev;
  let middleListTail = curr;

  while (n > 0) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    n--;
  }

  if (!firstListTail) {
    head = prev;
  } else {
    firstListTail.next = prev;
  }
  middleListTail.next = curr;

  return head;
};
// @lc code=end
