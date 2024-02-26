function longestConsecutive(nums: number[]): number {
  // Create a set of nums that exits in the initial array
  const seen: Record<string, boolean> = {};
  for (let i = 0; i < nums.length; i++) {
    seen[nums[i]] = true;
  }

  // Create a variable to track the longest sequence seen
  let longest = 0;
  // Loop over each key in the set
  for (let key in seen) {
    let currValue = parseInt(key);
    // If the key is not s start of the sequence, i.e. if a number 1 less than the current key
    // exists in the set, we ignore that case, and continue the loop
    if (seen[currValue - 1]) {
      continue;
    }
    // Create a variable to track the current sequence length
    let currLength = 1;
    // Else, the key is the start of the sequence
    // While key+1 exists in the set, we increment the length of the current sequence
    while (seen[currValue + 1]) {
      currLength += 1;
      currValue += 1;
    }
    // Update the global longest sequence length
    longest = Math.max(longest, currLength);
  }
  // Return the answer
  return longest;
}
