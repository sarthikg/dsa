function isAnagram(s: string, t: string): boolean {
  // Initial check, if lengths not equal, return false
  if (s.length !== t.length) {
    return false;
  }

  // Create an object to store the count of each value
  const seen: Record<string, number> = {};

  // Add count of all elements from first string into the object
  for (let i = 0; i < s.length; i++) {
    const value = s[i];
    if (seen[value]) {
      seen[value] += 1;
    } else {
      seen[value] = 1;
    }
  }

  // Check & reduce count of each element from object as per second string
  for (let i = 0; i < t.length; i++) {
    const value = t[i];
    if (seen[value] === undefined) {
      return false;
    }
    seen[value] -= 1;
  }

  // For each key in the object, check if the frequency of it's appearance if finally 0
  for (let key in seen) {
    if (seen[key] !== 0) {
      return false;
    }
  }

  // If it's 0 for every value, the strings are anagrams
  return true;
}
