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

export function preorderTraversal(root: TreeNode | null): number[] {
  let result: number[] = [];

  function recurse(node: TreeNode | null) {
    if (node) {
      result.push(node.val);
      recurse(node.left);
      recurse(node.right);
    }
  }

  recurse(root);
  return result;
}
