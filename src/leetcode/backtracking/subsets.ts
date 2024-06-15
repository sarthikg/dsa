export function subsets(nums: number[]): number[][] {
  // Define the recursive function
  function recurse(currIndex: number, currSubsets: number[][]): number[][] {
    // Base Condition - If the current-index equals length of nums, return currSubsets
    if (currIndex === nums.length) {
      return currSubsets;
    }
    // Recursive Step - Capture the length of the currSubsets
    const currLength = currSubsets.length;
    // Loop over the initial length of the currSubsets
    for (let i = 0; i < currLength; i++) {
      // For each value in the currSubset, add a value with the current value added to it
      currSubsets.push([...currSubsets[i], nums[currIndex]]);
    }
    // Call the recursion on the next index
    return recurse(currIndex + 1, currSubsets);
  }
  // Return the result of the recursive function
  return recurse(0, [[]]);
}
