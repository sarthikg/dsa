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

export function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  // If the root element is null, return null
  if (!root) {
    return null;
  }
  // If the root element equals the value, return the node
  if (root.val === val) {
    return root;
  }
  // Search for left & right subtree, if either of those return a value, return the value
  else {
    const leftSearch = searchBST(root.left, val);
    const rightSearch = searchBST(root.right, val);
    return leftSearch || rightSearch;
  }
}
