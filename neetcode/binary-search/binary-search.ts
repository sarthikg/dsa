function search(nums: number[], target: number): number {
  // Create a left & right pointer
  let left = 0;
  let right = nums.length - 1;

  // While the two pointers don't overlap/infact cross each other
  while (left <= right) {
    // Get the element at the middle of left & right index
    const mid = Math.floor(left + (right - left) / 2);
    // If the middle element is equal to target, return the index of mid
    if (nums[mid] === target) {
      return mid;
    }
    // If the middle element is less than the target, search on the right side
    else if (nums[mid] < target) {
      left = mid + 1;
    }
    // If the midle element is greater than the target, search on the left side
    else {
      right = mid - 1;
    }
  }
  // Return -1 incase the element was not found in the array
  return -1;
}
