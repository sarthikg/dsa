### Binary Trees

- Trees with atmost 2 children are called binary-trees

#### Array representation

A binary-tree can be represented as an array, where the relations are preserved based on the location of nodes in the array.

> We assume the array to be 1-indexed for the validity of following formulas

- **If the node is at index** - i
- **Its left child is at** - 2\*i
- **Its right child is at** - 2\*(i+1)
- **Its parent is at** - Math.floor(i/2)

#### Full Binary Tree

- It is a binary-tree which is completely filled till a certain height h.
- This means, if we were to add a new node to this binary tree, its height would increase.

#### Complete Binary Tree

- It is a binary-tree where it's array representation doesn't include any `null` values.
- This means, for the last level of the tree, if all the nodes are not filled, in that case the nodes are filled from left to right, i.e. there is no space on the left-side while the elements are filled on the right side of the tree.
- Height of the complete binary tree would be `logn`
