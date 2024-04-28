export function binarySearchIterative(nums: number[], target: number): number {
  // Create left & right pointers
  let left = 0;
  let right = nums.length - 1;

  // While left & right pointers don't cross each other
  while (left <= right) {
    // Calculate the mid point
    const mid = Math.floor(left + (right - left) / 2);
    // If value at mid-point equals the target, return the index
    if (nums[mid] === target) {
      return mid;
    }
    // If the target is less than mid-point, search on the left-side
    else if (nums[mid] > target) {
      right = mid - 1;
    }
    // Else, search on the right side
    else {
      left = mid + 1;
    }
  }
  // If the number wasn't found, return -1
  return -1;
}

export function binarySearchRecursive(nums: number[], target: number): number {
  function recurse(left: number, right: number): number | undefined {
    // Base Condition
    if (left > right) {
      return;
    }
    // Recursive Condition
    // Calculate the mid point
    const mid = Math.floor(left + (right - left) / 2);
    // If mid-point equals target,return the mid index
    if (nums[mid] === target) {
      return mid;
    }
    // Else recurse on left or right side
    if (nums[mid] > target) {
      return recurse(left, mid - 1);
    } else {
      return recurse(mid + 1, right);
    }
  }
  // Call the recurse method with initialisation values
  const solution = recurse(0, nums.length - 1);
  return solution ?? -1;
}
