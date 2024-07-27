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

export function diameterOfBinaryTree(root: TreeNode | null): number {
  // Variable to store the maximum diameter
  let maxDiameter = 0;
  // Function which recursively calculates the diameter for every node
  function recurse(node: TreeNode | null) {
    // If the node is null/undefined, its height is 0
    if (!node) {
      return 0;
    }
    // Calculate the height of the left & right subtrees
    const leftHeight = recurse(node.left);
    const rightHeight = recurse(node.right);
    // Adding the height of left & right subtree, we get the diameter for the current node
    const currDiameter = leftHeight + rightHeight;
    maxDiameter = Math.max(currDiameter, maxDiameter);
    // Calculate the max-height for the current node, which is max of left & right heights
    const maxHeight = Math.max(leftHeight, rightHeight);
    // Return maxHeight + 1, where +1 indicates the current edge
    return maxHeight + 1;
  }
  // Initialise on the root of the tree
  recurse(root);
  // Return the maximum diameter
  return maxDiameter;
}
