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

export function invertTree(root: TreeNode | null): TreeNode | null {
  // Function which recursively inverts the children of the current node
  function recurse(node: TreeNode | null) {
    // If the node is null/undefined, return
    if (!node) {
      return;
    }

    // Swap the left & right child nodes
    const leftNode = node.left;
    node.left = node.right;
    node.right = leftNode;

    // Call the recursion on the left & right child nodes
    recurse(node.left);
    recurse(node.right);
  }
  // Initialise on the root node
  recurse(root);
  // Return the root node as it will remain the same
  return root;
}
