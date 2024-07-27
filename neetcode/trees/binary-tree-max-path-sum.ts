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

export function maxPathSum(root: TreeNode | null): number {
  let max = -Infinity;
  function recurse(node: TreeNode | null): number {
    // Base Case - If node is null, return 0 as sum
    if (!node) {
      return 0;
    }
    // Recursive Case
    // Calculate sum of the left & right subtrees
    const leftSum = recurse(node.left);
    const rightSum = recurse(node.right);

    // Calculate the max branch-sum, i.e. max of
    // 1. left-subtree + node
    // 2. right-subtree + node
    // 3. node
    const branchSum = Math.max(
      leftSum + node.val,
      rightSum + node.val,
      node.val,
    );

    // Calculate max tree-sum, i.e. max of branch-sum & left-subtree + right-subtree + node
    const treeSum = Math.max(branchSum, node.val + rightSum + leftSum);
    // Store the max of tree-sum in global variable
    max = Math.max(max, treeSum);
    // Return the max of branch-sum
    return branchSum;
  }
  // Initialise recursion on the root
  recurse(root);
  // Return the max sum
  return max;
}
