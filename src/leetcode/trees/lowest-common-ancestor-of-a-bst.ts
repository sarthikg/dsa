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

export function lowestCommonAncestor(
  root: TreeNode,
  p: TreeNode,
  q: TreeNode,
): TreeNode | null {
  function recurse(node: TreeNode): TreeNode {
    // Base Case - If one of the value is less than current, while other is greater
    if (p.val <= node.val && q.val >= node.val) {
      return node;
    }
    if (p.val >= node.val && q.val <= node.val) {
      return node;
    }
    // Recursive Case
    if (p.val < node.val && q.val < node.val) {
      return recurse(node.left as TreeNode);
    }
    return recurse(node.right as TreeNode);
  }
  return recurse(root);
}
