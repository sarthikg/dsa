export function insertInMaxHeap(heap: number[], el: number): number[] {
  // Define the recursive function
  function recurse(currIndex: number) {
    // Base Condition
    if (currIndex === 0) {
      return;
    }

    // Recursive Condition
    // Calculate the index of the parent element
    const parentIndex = Math.floor(currIndex / 2) - 1;
    // If the current element is greater than the parent element
    if (heap[currIndex] > heap[parentIndex]) {
      // Swap the elements
      const currEl = heap[currIndex];
      heap[currIndex] = heap[parentIndex];
      heap[parentIndex] = currEl;
      // Call recursion on the parent index
      recurse(parentIndex);
    }
  }

  // Insert the element in the end of the list
  heap.push(el);
  // Call the recursion function with the last position
  recurse(heap.length - 1);
  // Return the resultant heap
  return heap;
}
