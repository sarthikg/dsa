## Heap

- A heap is a complete binary-tree.

### Types of Heaps

#### Max Heap

- A max-heap is a binary tree where the descendants of any node are less than the node itself.
- Here, the largest value would be the root of the tree.

#### Min Heap

- A min-heap is a binary tree where the descendants of any node are greater than the node itself.
- Here, the smallest value would be the root of the tree.

### Heap Operations

#### Insertion

- In order to insert a new element, it is added in the very last place of the heap, such that the heap is still a complete binary tree. This also means that incase of an array representation of a heap, the element is added in the last place.
- Once the element is added, depending on if the heap is a min-heap or a max-heap, the element will have to be re-adjusted to its correct position.
- For this, we recursively compare the element with it's parent element in the heap, i.e. element at `Math.floor(n/2)` position. Incase the current element is greater than the parent element, we swap the elements (incase of max-heap).
- In the worst-case, this will require `O(logn)` comparisons, where `n` is the elements in the tree, & `logn` is the height of the tree.

#### Deletion

- In case of heaps, the only possible element which can be deleted is the root of the heap, which is the max-value incase of max-heap & min-value incase of min-heap.
- Once the root node is deleted, the values need to be readjusted as such the remainder is a valid complete binary tree.
- To do this, we move the last element in the heap, i.e. the last element in the array representation of the heap in the very first place, i.e. as the new root node.
- Once the element is added, depending on if the heap is a min-heap or a max-heap, the element will have to be re-adjusted to its correct position.
- For this, we recursively check the immediate children of the current element, i.e. `n*2` & `(n*2)+1` elements. If the max of these elements is greater than the current element, we swap these elements. (incase of max-heap)
- In the worst-case, this will require `O(logn)` comparisons, where `n` is the elements in the tree, & `logn` is the height of the tree.

### Heap Sort

- Incase of deletion from heap, in the array representation of heap, the last index of the array is emptied out with every heap deletion.
- Since the element that is deleted is always the root element of the heap, the resultant values from multiple delete operations are values in sorted order.
- With every delete operation, we can utilise the newly created empty space at the end of the array, and store the deleted value there.
- After `n` operations of deletion, the resultant array will have all the values sorted.
- Technically, we perform `n` delete operations, and each delete operation has a time-complexity of `O(logn)`, hence the total time-complexity of heap-sort is `O(nlogn)`.

### Priority Queues

- Typical queues allow for FIFO operations, but incase we have to assign a weight/priority to each value in the queue, that is not possible in a typical queue.
- For this, we use a heap. Incase values with higher priority have to be fetched first, we use a max-heap, and incase the values with lower-priority have to be fetched first, we use a min-heap.
- Adding a new value to the priority queue is similar to an insert operation, hence takes `O(logn)` time.
- Removing a value from the priority queue is similar to a delete operation, hence takes `O(logn)` time as well.
