export function combinationSum(
  candidates: number[],
  target: number,
): number[][] {
  // Sort the input array since this will be used for further optimisation
  candidates.sort((a, b) => a - b);

  // Store all the possible combinations
  const combinations: number[][] = [];

  // Define the recursive function
  function recurse(currIndex: number, currTotal: number, currComb: number[]) {
    // Base Condition - If the current-total equals target, push the combination and return
    if (currTotal === target) {
      combinations.push(currComb);
      return;
    }
    // Recursive Condition - Loop over each element from the current index forward (to prevent duplicates)
    for (let i = currIndex; i < candidates.length; i++) {
      // Calculate the new total and new combination
      const newTotal = currTotal + candidates[i];
      const newComb = [...currComb, candidates[i]];
      // If the new total is less than the target, call the recursive function again
      if (newTotal <= target) {
        recurse(i, newTotal, newComb);
      }
      // If the new total is greater than target, break the loop since the array was sorted, every other value will have a sum greater than the current value
      else {
        break;
      }
    }
  }
  // Call the recursive function
  recurse(0, 0, []);
  // Return the combinations
  return combinations;
}
