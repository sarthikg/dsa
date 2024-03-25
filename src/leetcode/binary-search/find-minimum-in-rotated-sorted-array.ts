function findMin(nums: number[]): number {
  // Create left & right pointers
  let left = 0;
  let right = nums.length - 1;

  // While left & right pointers don't overlap
  while (left <= right) {
    // If the search array is sorted, return the left value, as it will be the smallest of all
    if (nums[left] <= nums[right]) {
      return nums[left];
    }

    // Find the mid value of the search array
    const mid = Math.floor(left + (right - left) / 2);
    // If the left value is less than the mid value, left part of the array is sorted, and should be rotated
    if (nums[left] <= nums[mid]) {
      // Hence, we can move the left pointer to the mid, and search the right side
      left = mid + 1;
    }
    // If the left pointer is greater than the mid value, pivot lies in the left part of the array
    else {
      // Hence, we can move the right pointer to the mid, and search the left side
      right = mid;
    }
  }
}
