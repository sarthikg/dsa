function containsDuplicate(nums: number[]): boolean {
  // Create an object to store the seen values
  const seen: Record<number, boolean> = {};

  // Loop over all the values
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    // If value was already seen, return true
    if (seen[value]) {
      return true;
    }
    // If value was not seen before, add it to seen
    seen[value] = true;
  }
  // If value was not seen throughout, return false
  return false;
}
