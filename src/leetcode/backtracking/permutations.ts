function permute(nums: number[]): number[][] {
  // Create a hashmap of all the numbers
  const numsObj: Record<number, boolean> = {};
  for (let i = 0; i < nums.length; i++) {
    numsObj[nums[i]] = true;
  }
  // Variable to store the combinations
  const combinations: number[][] = [];

  // Define the recursive function
  function recurse(
    availableNums: Record<number, boolean>,
    currCombination: number[],
  ): void {
    // Base Condition - If the current combination has length equal to the length of the input array
    // then push it to the combinations array
    if (currCombination.length === nums.length) {
      combinations.push(currCombination);
    }

    // Recursive Case - Loop over the keys in the availableNums
    const keys = Object.keys(availableNums);
    for (let i = 0; i < keys.length; i++) {
      // Capture the key & the value in their variables
      const key = keys[i];
      const value = availableNums[key];
      // If the value is true, the number hasn't been used previously in the combination
      if (value) {
        // Call the recursive function again
        recurse({ ...availableNums, [key]: false }, [
          ...currCombination,
          parseInt(key),
        ]);
      }
    }
  }
  // Call the recursive function
  recurse(numsObj, []);
  // Return the combinations
  return combinations;
}
