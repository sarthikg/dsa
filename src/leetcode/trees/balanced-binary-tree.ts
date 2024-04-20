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

function isBalanced(root: TreeNode | null): boolean {
  // Create a variable which tracks if the tree is imbalanced
  let isBalanced = true;
  // Function to recursively check every node for being balanced
  function recurse(node: TreeNode | null) {
    if (!node) {
      // If the node is null/undefined, its height is 0
      return 0;
    }
    // Calculate the left & right subtree's heights
    const leftHeight = recurse(node.left);
    const rightHeight = recurse(node.right);
    // If the diff of heights is greater than 1, they are imbalanced
    if (Math.abs(rightHeight - leftHeight) > 1) {
      isBalanced = false;
    }
    // Height of the current node is max-height of left & right subtree + 1
    const maxHeight = Math.max(leftHeight, rightHeight);
    return maxHeight + 1;
  }
  // Initialise on the root node
  recurse(root);
  // Return if the tree is balanced
  return isBalanced;
}
