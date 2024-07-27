function checkInclusion(s1: string, s2: string): boolean {
  // Initialise left & right pointers
  let left = 0;
  let right = 0;

  // Create a word-frequency array for s1 string
  const s1Freq = getStringFreq(s1);
  // Create a rolling word-frequency array for s2 string
  const seen = new Array(26).fill(0);

  // Add the (s1.length-1) number of elements from s2 into the sliding window
  while (right - left + 1 < s1.length && right < s2.length) {
    // Get the index for the value on right of sliding window
    const rightIndex = s2[right].charCodeAt(0) - 97;
    // Increment the frequency counter
    seen[rightIndex] += 1;
    // Move the right pointer
    right += 1;
  }

  // While the right pointer doesn't overflow
  while (right < s2.length) {
    // Add freq of the right element (this makes sliding window equal to size of s1)
    const rightIndex = s2[right].charCodeAt(0) - 97;
    seen[rightIndex] += 1;

    // Check if the current sliding window is a permutation
    const isPermut = compareArr(seen, s1Freq);
    if (isPermut) {
      return true;
    }

    // Reduce the frequency of the left element (this makes sliding window equal to s1.length-1)
    const leftIndex = s2[left].charCodeAt(0) - 97;
    seen[leftIndex] -= 1;

    // Move left & right pointers forward
    right += 1;
    left += 1;
  }
  // Return false if we exit the loop & there wasn't any match
  return false;
}

/**
 * Compare arrays for matches
 * @param arr1 - First array
 * @param arr2 - Second array
 * @returns - If the arrays are equal
 */
function compareArr(arr1: number[], arr2: number[]): boolean {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

/**
 * Get the frequency array for a string
 * @param str - Input string
 * @returns - Frequency array
 */
function getStringFreq(str: string): number[] {
  const freq = new Array(26).fill(0);
  for (let i = 0; i < str.length; i++) {
    const index = str[i].charCodeAt(0) - 97;
    freq[index] += 1;
  }
  return freq;
}
