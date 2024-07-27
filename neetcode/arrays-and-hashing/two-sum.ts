export function twoSum(nums: number[], target: number): number[] {
  // Object to store the positions of the seen elements
  const position: Record<number, number> = {};

  // Loop over the numbers array
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    // Calculate the difference from the target
    const diff = target - value;

    // If target exists in the positions object, return the answer
    if (position[diff] !== undefined) {
      return [i, position[diff]];
    }

    // Else, add the current value with its position
    position[nums[i]] = i;
  }
  // This shall never run, since the question suggests that for every input there exists an output
  return [];
}
