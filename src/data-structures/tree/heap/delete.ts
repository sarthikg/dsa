export function deleteInMaxHeap(heap: number[]): number[] {
  // Define the recursive function
  function recurse(currIndex: number) {
    // Base Condition
    if (currIndex >= heap.length) {
      return;
    }

    // Recursive Condition
    // Calculate the index of the child elements
    const leftIndex = currIndex * 2 - 1;
    const rightIndex = leftIndex + 1;
    // Calculate the values at left & right indexes
    const leftValue = heap.at(leftIndex) || -Infinity;
    const rightValue = heap.at(rightIndex) || -Infinity;

    // Early return incase both the children had no value
    if (leftValue === -Infinity && rightValue === -Infinity) {
      return;
    }

    // Get the index of the child element with the max value
    let swapChildIndex;
    if (leftValue > rightValue) {
      swapChildIndex = leftIndex;
    } else {
      swapChildIndex = rightIndex;
    }

    // If the value of max-child is less than the current element, return
    if (heap[swapChildIndex] < heap[currIndex]) {
      return;
    }

    // Swap the child element with a
    const currElement = heap[currIndex];
    heap[currIndex] = heap[swapChildIndex];
    heap[swapChildIndex] = currElement;
    // Call recursion on the child index
    recurse(swapChildIndex);
  }

  // Store the deleted value from the heap
  const deletedValue = heap.at(0);
  // Swap the last element into the first position
  heap[0] = heap.pop() as number;
  // Call the recursion function with the first position
  recurse(0);
  // Return the resultant heap
  return heap;
}
