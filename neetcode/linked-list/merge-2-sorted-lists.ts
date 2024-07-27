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

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  // Pointers for the linked-lists
  let first = list1;
  let second = list2;
  // Pointer to the head of the resultant linked-list
  let resultHead = new ListNode();
  // Current pointer for the resultant linked-list
  let result = resultHead;

  // While current pointer for both first & second linked list exists
  while (first && second) {
    // Create a variable to store the next-node
    let node;
    // Create a new node with value of whichever list has smaller value
    if (first.val < second.val) {
      node = new ListNode(first.val);
      first = first.next;
    } else {
      node = new ListNode(second.val);
      second = second.next;
    }
    // Add the current-node as the next node
    result.next = node;
    // Update the current pointer to the resultant linked-list
    result = result.next;
  }

  // While there are elements left in first linked-list
  while (first) {
    // Create new node with value from first linked-list
    const node = new ListNode(first.val);
    // Move the pointer
    first = first.next;
    // Add the node to the resultant linked-list
    result.next = node;
    result = result.next;
  }

  // While there are elements left in second linked-list
  while (second) {
    // Create new node with value from second linked-list
    const node = new ListNode(second.val);
    // Move the pointer
    second = second.next;
    // Add the node to the resultant linked-list
    result.next = node;
    result = result.next;
  }

  // Return the next pointer of the head of the resultant linked-list
  return resultHead.next;
}
