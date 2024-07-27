function characterReplacement(s: string, k: number): number {
  // Create left & right pointers
  let left = 0;
  let right = 0;
  // Variable to store the max-length encountered
  let maxLength = 0;
  // Array containing the frequency of seen elements, since the elements can only be upper-case alphabets, array of 26 makes more sense
  const seen = new Array(26).fill(0);

  // While right pointer doesn't overflow
  while (right < s.length) {
    // Find index of right element based off ascii interpretation of upper-case letters
    const rightIndex = s[right].charCodeAt(0) - 65;
    // Update the frequency of right element
    seen[rightIndex] += 1;

    // Get the count of replacements required to get all similar alphabets in the sliding window
    const replacements = getReplacementCount(seen);

    // If replacemnts required > k (allowed replacements), move the left pointer
    if (replacements > k) {
      // While replacement count is back in limits, keep moving the left pointer
      while (getReplacementCount(seen) > k && left < right) {
        // Find index of the left element based off ascii interpretation of upper-case letters
        const leftIndex = s[left].charCodeAt(0) - 65;
        // Update the frequency of left element
        seen[leftIndex] -= 1;
        // Move the left pointer towards right
        left += 1;
      }
    }

    // At this point, sliding window should always be in a stable state, i.e. replacements required < k
    // Get the current length of sliding window, could be (right-left+1) as well
    const currLength = seen.reduce((prev, curr) => prev + curr, 0);
    // Update the max-length to be max of currLength & maxLength
    maxLength = Math.max(currLength, maxLength);
    // Move the right pointer forward
    right += 1;
  }
  // Return the max-length seen till now
  return maxLength;
}

/**
 * Get the number of replacements required in the array
 * @param arr - Frequency array
 * @returns - Number of replacements required
 */
function getReplacementCount(arr: number[]): number {
  const sum = arr.reduce((prev, curr) => prev + curr, 0);
  const max = Math.max(...arr);
  // Ideally, all the elements less than the element with max frequency will have to be replaced
  return sum - max;
}
