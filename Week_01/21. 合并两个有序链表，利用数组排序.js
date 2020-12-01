/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let dummy = new ListNode
  let newList = dummy
  let arr = []

  while (l1) {
    arr.push(l1)
    l1 = l1.next
  }

  while (l2) {
    arr.push(l2)
    l2 = l2.next
  }

  arr.sort((a, b) => a.val - b.val)

  for (let i = 0; i < arr.length; i++) {
    newList.next = arr[i]
    newList = newList.next
  }

  return dummy.next
};