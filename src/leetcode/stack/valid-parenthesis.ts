function isValid(s: string): boolean {
  // Create a list of open brackets
  const openB = ["(", "[", "{"];
  // Create a list of closed brackets
  const closedB = [")", "]", "}"];

  // Create a stack to store the intermediate verification
  const stack = [];

  // Loop over each element of the string
  for (let i = 0; i < s.length; i++) {
    // Store the current element
    const el = s[i];

    // If the current element is an open bracket
    if (openB.includes(el)) {
      // Push the element in the stack
      stack.push(el);
    }
    // Else if the current element is a closing bracket
    else {
      // Find the index of the closed bracket
      const index = closedB.indexOf(el);
      // If the last element on the stack is *not* the open bracket for the current closed bracket
      if (stack.at(-1) !== openB[index]) {
        // Return false, because there should have been a matching closed bracket
        return false;
      }
      // If the last element on the stack if the open bracket for the current closed bracket,
      // remove the open element from the stack
      stack.pop();
    }
  }
  // Finally, if the length of the stack is 0, return true
  if (stack.length === 0) {
    return true;
  }
  // If the length of the stack is more than 0, return false
  return false;
}
