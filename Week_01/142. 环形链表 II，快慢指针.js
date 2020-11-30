/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let slow = head
  let fast = head
  let meet = false

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next

    if (slow === fast) {
      meet = true
      break
    }
  }

  if (!meet) {
    return null
  }

  let node = head

  while (node !== fast) {
    node = node.next
    fast = fast.next
  }

  return fast
};