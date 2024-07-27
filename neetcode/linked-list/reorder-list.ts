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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  // Get the middle element of the linked list
  const midNode = getMiddleElement(head);
  // Reverse the linked list on right side, starting from the mid-node
  const rightHead = reverseList(midNode);

  // Create left & right pointers
  let left: ListNode | null = head;
  let right: ListNode | null = rightHead;

  // While both left & right pointers exist
  while (left && right) {
    // Point the left-node to the right-node
    const nextLeft: ListNode | null = left.next;
    left.next = right;
    // Point the right-node to the next-left-node
    const nextRight: ListNode | null = right.next;
    right.next = nextLeft;
    // Update the left & right pointers
    left = nextLeft;
    right = nextRight;
  }
}

/**
 * Reverse a linked-list
 * @param head - Head of the linked-list
 * @returns - Head of the reversed linked-list
 */
function reverseList(head: ListNode): ListNode {
  // Store the previous node, starts as null-node
  let prevNode: ListNode | null = null;
  // Store the current node, starts as head of the linked-list
  let currNode: ListNode | null = head;

  // While the current node doesn't overflow
  while (currNode) {
    // Store the current next-node
    let nextNode: ListNode | null = currNode.next;
    // Point current-node to previous-node
    currNode.next = prevNode;
    // Update previous node to be current node
    prevNode = currNode;
    // Update current node to be next node
    currNode = nextNode;
  }
  // Return the prev-node, which will be the head of the reversed-linked-list
  return prevNode as ListNode;
}

/**
 * Get middle node of a linked-list
 * @param head - Head of the linked-list
 * @returns - Middle node
 */
function getMiddleElement(head: ListNode | null): ListNode {
  // Create fast & slow pointers
  let prevSlowPointer: ListNode | null = null;
  let slowPointer: ListNode = head;
  let fastPointer: ListNode | null = head;

  // While fast pointer is not at the last-node or has overflowed
  while (fastPointer && fastPointer.next) {
    // Move fast-pointer by 2
    fastPointer = fastPointer.next.next;
    prevSlowPointer = slowPointer;
    // Move slow pointer by 1
    slowPointer = slowPointer.next as ListNode;
  }

  // Based on where the fast-pointer currently is, return the appropriate mid-node
  // Here, position of fast-pointer indicates if the linked-list had odd/even number of elements
  if (fastPointer) {
    // Break the pointer between the 2 linked-lists, i.e. left & right
    const nextPointer = slowPointer.next;
    slowPointer.next = null;
    return nextPointer;
  } else {
    // Break the pointer between the 2 linked-lists, i.e. left & right
    prevSlowPointer.next = null;
    return slowPointer;
  }
}
