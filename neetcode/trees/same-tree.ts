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

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  // Variable to track if the trees are same or not
  let areSame = true;
  // Function to recursively check every node for equality
  function recurse(a: TreeNode | null, b: TreeNode | null) {
    if (!a && !b) {
      // If node is undefined/null for both trees, return
      return;
    }
    if ((a && !b) || (!a && b)) {
      // If node is undefined/null for one of the trees, but not other, update the areSame & return
      areSame = false;
      return;
    }
    if ((a as TreeNode).val !== (b as TreeNode).val) {
      // If the value of both the nodes are diff, update the areSame & return
      areSame = false;
      return;
    }
    // Recurse on the left & right subtrees
    recurse((a as TreeNode).left, (b as TreeNode).left);
    recurse((a as TreeNode).right, (b as TreeNode).right);
  }
  // Initialise on the root of both trees
  recurse(p, q);
  // Return if the trees are same
  return areSame;
}
