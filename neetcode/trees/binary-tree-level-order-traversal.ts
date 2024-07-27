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

export function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  function recurse(node: TreeNode | null, level = 0) {
    // Base Condition - If node is null, return
    if (node === null) {
      return;
    }
    // Recursive Condition

    // If result is not present at the level, create an array
    if (!result[level]) {
      result[level] = [];
    }
    // Push value of current node
    result[level].push(node.val);
    // Recurse first on left, and then right subtree
    recurse(node.left, level + 1);
    recurse(node.right, level + 1);
  }
  recurse(root);
  return result;
}
