/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let set = new Set
  let node = head

  while (node) {
    if (set.has(node)) {
      return true
    }
    set.add(node)
    node = node.next
  }

  return false
};