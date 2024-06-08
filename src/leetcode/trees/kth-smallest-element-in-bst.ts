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

export function kthSmallest(root: TreeNode | null, k: number): number {
  // Variable to store the result
  let result: number | null = null;
  function recurse(node: TreeNode | null) {
    // Base Case - If node is null or if result is already populaed, return
    if (!node || result) {
      return;
    }

    // Recursive Case
    // Recursively call the left subtree
    recurse(node.left);
    // If k === 1 & result is still empty, means we have found the kth smallest element
    if (k === 1 && result === null) {
      result = node.val;
      return;
    }
    // If k is greater than 1, decrement k as it was a smaller element
    else if (k > 1) {
      k -= 1;
    }
    // Recursively call the right subtree
    recurse(node.right);
  }

  // Initialise the recursive function
  recurse(root);
  // Return the result
  return result as unknown as number;
}
