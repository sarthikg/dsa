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

function inorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];

  function recurse(node: TreeNode | null) {
    if (node) {
      recurse(node.left);
      result.push(node.val);
      recurse(node.right);
    }
  }

  recurse(root);
  return result;
}
