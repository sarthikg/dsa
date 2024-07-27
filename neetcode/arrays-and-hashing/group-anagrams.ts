function groupAnagrams(strs: string[]): string[][] {
  // Object which stores the stringified array of character frequency as key
  // and array of anagrams as the value
  const anagrams: Record<string, string[]> = {};

  // Loop over all the values
  for (let i = 0; i < strs.length; i++) {
    // Get a string of array which represents the character frequency
    const wordFreq = getWordFrequency(strs[i]);
    // If anagrams object contains the key, add anagram to the resultant array
    if (anagrams[wordFreq]) {
      anagrams[wordFreq].push(strs[i]);
    } else {
      // Else create a new array with anagram as the only value
      anagrams[wordFreq] = [strs[i]];
    }
  }
  // Return list of values from the anagrams object
  return Object.values(anagrams);
}

function getWordFrequency(word: string): string {
  // Create an object of 26 length, each of which represents the frequency of each character
  const result = Array(26).fill(0);
  // Loop over the word & increase the frequency in the array
  for (let i = 0; i < word.length; i++) {
    result[word.charCodeAt(i) - 97] += 1;
  }
  // Return the stringified array
  return result.toString();
}
