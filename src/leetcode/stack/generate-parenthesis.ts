function generateParenthesis(n: number): string[] {
  // Function which is used for recursion
  function recurse(
    openLeft: number,
    closedLeft: number,
    res: string,
  ): string[] {
    // Base Condition - String is created & can be returned
    if (openLeft === 0 && closedLeft === 0) {
      return [res];
    }

    // Create an array to store the results from recursion calls
    let result: string[] = [];

    // If there's available open brackets that can be added, recurse by adding 1
    if (openLeft > 0) {
      const openRes = recurse(openLeft - 1, closedLeft, `${res}(`);
      if (openRes) {
        result = result.concat(openRes);
      }
    }
    // If the number of open brackets which are used is greater than the number of closed brackets which are used, we can add a closed bracket
    if (openLeft < closedLeft) {
      const closedRes = recurse(openLeft, closedLeft - 1, `${res})`);
      if (closedRes) {
        result = result.concat(closedRes);
      }
    }

    // Return the result
    return result;
  }
  // Call the recurse function & return its result
  return recurse(n, n, "");
}
