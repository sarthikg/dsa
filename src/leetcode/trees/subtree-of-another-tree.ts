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

export function isSubtree(
  root: TreeNode | null,
  subRoot: TreeNode | null,
): boolean {
  function sameTree(node: TreeNode | null, subNode: TreeNode | null): boolean {
    // Base Condition
    if (node === null && subNode === null) {
      return true;
    } else if (node === null || subNode === null) {
      return false;
    }
    // Recursive Condition
    if (node.val !== subNode.val) {
      return false;
    }
    return (
      sameTree(node.left, subNode.left) && sameTree(node.right, subNode.right)
    );
  }

  function recurse(node: TreeNode | null): boolean {
    // Base Condition
    if (node === null) {
      return false;
    }
    // Recursive Condition
    const isCurrent =
      node.val === (subRoot as TreeNode).val ? sameTree(node, subRoot) : false;
    const isLeft = recurse(node.left);
    const isRight = recurse(node.right);
    return isCurrent || isLeft || isRight;
  }
  return recurse(root);
}
