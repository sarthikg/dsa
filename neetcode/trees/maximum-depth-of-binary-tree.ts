/**
 * Definition for a binary tree node.
 */
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function maxDepth(root: TreeNode | null): number {
  // Variable to store the maximum depth
  let maxDepth = 0;
  // Function which recursively navigates to the nodes in the tree
  function recurse(node: TreeNode | null, currDepth = 0) {
    if (!node) {
      // If the node is null/undefined, it the leaf, hence calculate the height
      maxDepth = Math.max(currDepth, maxDepth);
    } else {
      // Else, recurse on the left & right subtrees
      recurse(node.left, currDepth + 1);
      recurse(node.right, currDepth + 1);
    }
  }
  // Initialise calculation of depth on the root node
  recurse(root);
  // Return the max-depth
  return maxDepth;
}
