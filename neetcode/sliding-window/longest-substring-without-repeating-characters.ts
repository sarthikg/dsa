function lengthOfLongestSubstring(s: string): number {
  // Create left & right pointers
  let left = 0;
  let right = 0; // Initialise right pointer to 0 so the loop handles addition of that element in seen dict.

  // Create a hashmap to store the seen elements & their frequencies
  const seen: Record<string, number> = {};
  // Store the max length seen till now
  let maxLength = 0;
  // While the right pointer doesn't overflow
  while (right < s.length) {
    // Add 1 to the frequency of seen element
    seen[s[right]] = seen[s[right]] ? seen[s[right]] + 1 : 1;
    // After adding the right element, if the freq of right element is > 1
    if (seen[s[right]] > 1) {
      // Move the left pointer until the frequency of right element is back to 1
      while (seen[s[right]] > 1) {
        // Reduce the frequency of the left element
        seen[s[left]] -= 1;
        // Move the left pointer
        left += 1;
      }
    }
    // Calculate the max-length
    maxLength = Math.max(right - left + 1, maxLength);
    // Move the right pointer forward
    right += 1;
  }
  // Return the max-length
  return maxLength;
}
