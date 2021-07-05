/* OVERVIEW

Reverse a Singly Linked List

Example:
1 -> 2 -> 3
3 -> 2 -> 1

- We could copy and reverse the list, but this is about POINTER storage and manipulation.

- Time: O(n)
- Space: O(1) iteratively & O(n) recursively due to the call stack

*/

/* ITERATIVE APPROACH

1. Initialize 3 pointers - we need the following pointers:
- PREVIOUS pointer because in a SINGLY linked list, you cannot refer to the node before you.
- CURRENT pointer to remember where we are currently at.
- NEXT pointer because if we change the current node's next value, we will lose the rest of the linked list in the iteration.

2. Enter a loop while the CURRENT pointer is not null.

3. Inside of the while loop:
- Save the reference to the rest of the linked list array in the NEXT pointer,
- Reverse the node by making the current node point to the PREVIOUS pointer,
- Keep moving along the linked list by advancing the PREVIOUS and CURRENT pointers to the next nodes.

4. At the end of the loop, PREVIOUS pointer would have become the new head.

*/

// July 4
function reverseLL(head) {
  let prev = null;
  let cur = head;
  let next = null;

  while (cur) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
}
