function isPalindrome(s: string): boolean {
  // Remove all non-alphanumeric characters from the string
  s = simplifyString(s);

  // Create a left & right pointer
  let left = 0;
  let right = s.length - 1;

  // Loop while the left & right pointer are not on the same element
  // Explanation - If the left & right pointer are on the same element, that element is anyways the same
  while (left < right) {
    // If both the values from the left & right are different, return false
    if (s[left] !== s[right]) {
      return false;
    }
    // Move the pointers
    left += 1;
    right -= 1;
  }
  // If all the values are same, its a palindrome
  return true;
}

function simplifyString(s: string): string {
  // Convert the string to lowercase
  const lowerCased = s.toLowerCase();
  // Create an array that stores the simplified string
  const result = [];
  // Loop over each value, and check if its alphanumeric
  for (let i = 0; i < lowerCased.length; i++) {
    const ascii = lowerCased.charCodeAt(i);
    const isLowerCase = ascii > 96 && ascii < 123;
    const isNumeric = ascii > 47 && ascii < 58;
    if (isLowerCase && isNumeric) {
      result.push(lowerCased[i]);
    }
  }
  // Return the array as a string
  return result.join("");
}
