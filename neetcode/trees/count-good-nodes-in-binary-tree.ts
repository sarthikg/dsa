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

export function goodNodes(root: TreeNode | null): number {
  function recurse(node: TreeNode | null, max: number = -Infinity): number {
    // Base Case - If node is null, return 0
    if (node === null) {
      return 0;
    }
    // Recursive Case
    // If the current node's value is greater than the max in the above path, store 1
    const current = node.val >= max ? 1 : 0;
    // Recurse of the left & right subtrees with the updates max values
    const left = recurse(node.left, Math.max(max, node.val));
    const right = recurse(node.right, Math.max(max, node.val));
    // Return the sum of current + left + right
    return current + left + right;
  }
  return recurse(root);
}
