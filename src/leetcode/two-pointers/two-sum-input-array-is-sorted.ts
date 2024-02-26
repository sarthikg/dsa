function twoSum(numbers: number[], target: number): number[] {
  // Create 2 pointers, one starts from the left, another from the right
  let left = 0;
  let right = numbers.length - 1;

  // Loop while both the pointers cross each other
  while (left < right) {
    // Calculate sum at the current indexes
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      // If sum equals target, return answer in 1-indexed form
      return [left + 1, right + 1];
    } else if (sum < target) {
      // If sum is less than target, move the left pointer
      left += 1;
    } else {
      // If sum is greater than target, move the right pointer
      right -= 1;
    }
  }
  // Ideally this should never happen, just to suppress typescript errors
  return [-1, -1];
}
