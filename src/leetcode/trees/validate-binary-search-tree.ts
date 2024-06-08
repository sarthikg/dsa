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

export function isValidBST(root: TreeNode | null): boolean {
  function recurse(
    node: TreeNode | null = root,
    min = -Infinity,
    max = Infinity,
  ): boolean {
    // Base Case
    if (!node) {
      return true;
    }
    // Recursive Case
    if (node.val <= min || node.val >= max) {
      return false;
    }
    // Start from the root of the tree, and reduce the range within which the value in the subtrees can exist
    const isLeftSubtree = recurse(node.left, min, node.val);
    const isRightSubtree = recurse(node.right, node.val, max);
    return isLeftSubtree && isRightSubtree;
  }
  return recurse();
}
