/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function reverseList(head: ListNode | null): ListNode | null {
  // Initialise pointers for prevNode & currNode
  let prevNode = null;
  let currNode = head;

  // While current node exists
  while (currNode) {
    // Store pointer to the next node
    let nextNode = currNode.next;
    // Update next pointer for the current node
    currNode.next = prevNode;
    // Update the previous node pointer
    prevNode = currNode;
    // Update the current node pointer
    currNode = nextNode;
  }

  // At the end of the loop, prevNode will have reference to start of the linked list
  return prevNode;
}
