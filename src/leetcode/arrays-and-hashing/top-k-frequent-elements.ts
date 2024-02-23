function topKFrequent(nums: number[], k: number): number[] {
  // Object to store the frequency of each number
  const seen: Record<number, number> = {};
  // Loop over each element & increase its frequency
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    if (seen[value]) {
      seen[value] += 1;
    } else {
      seen[value] = 1;
    }
  }

  // Array to store the numbers with frequency. Here, we use the position in the
  // array as the frequency, with the value being an array of all the numbers with
  // that frequency
  const frequency: number[][] = [];
  for (let key in seen) {
    const value = seen[key];
    if (frequency[value]) {
      frequency[value].push(parseInt(key));
    } else {
      frequency[value] = [parseInt(key)];
    }
  }

  // Next, we loop over the frequency array in reverse, and add the associated numbers
  // in the result array. We restrict adding numbers in this array till there are k elements
  // in the resultant array
  const result = [];
  for (let i = frequency.length - 1; i >= 0; i--) {
    const value = frequency[i];
    if (value) {
      result.push(...value);
    }
    if (result.length === k) {
      return result;
    }
  }
}
