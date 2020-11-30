/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let dummy = new ListNode
  let prev = dummy
  dummy.next = head
  let node = head
  
  while (node && node.next) {
    const next = node.next.next
    node.next.next = node
    prev.next = node.next
    node.next = next
    prev = node
    node = next
  }

  return dummy.next
};