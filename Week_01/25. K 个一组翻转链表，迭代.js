/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  function reverse(head, tail) {
    let prev = tail.next;
    let node = head;

    while (prev !== tail) {
      const next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return [tail, head];
  }

  let dummy = new ListNode();
  dummy.next = head;
  let prev = dummy;

  while (head) {
    let tail = prev;

    for (let i = 0; i < k; i++) {
      tail = tail.next;

      if (!tail) {
        return dummy.next;
      }
    }

    let next = tail.next;

    [head, tail] = reverse(head, tail);

    prev.next = head;
    tail.next = next;

    prev = tail;
    head = tail.next;
  }

  return dummy.next;
};
