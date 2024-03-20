function evalRPN(tokens: string[]): number {
  // Create a stack to store intermediary state
  const stack: number[] = [];
  // Create an array containing all the valid expression
  const expr = ["+", "-", "*", "/"];

  // Loop over all the tokens
  for (let i = 0; i < tokens.length; i++) {
    // Store the value of current token in a local variable
    const token = tokens[i];
    // If the token is not of type expression, it must be a number
    if (!expr.includes(token)) {
      // Push the number to the stack
      stack.push(parseInt(token));
    }
    // If the token is of type expression, we have to perform the calculation with the previous 2 values in the stack
    else {
      // Get the second value from the stack (think, first value popped from the stack will be later in stack if stack is visualised horizontally)
      const b = stack.pop() as number;
      // Get the first value from the stack
      const a = stack.pop() as number;
      // Perform the calculation on the 2 values
      const calcValue = calc(a, b, token);
      // Push the new calculated value to the stack
      stack.push(calcValue);
    }
  }
  // The only value in the stack would be the calculated answer
  return stack.at(-1) as number;
}

/**
 * Calculate the value based on the expression passed
 * @param a - First value
 * @param b - Second value
 * @param expr - Expression
 * @returns - Calculated value
 */
function calc(a: number, b: number, expr: string): number {
  if (expr === "+") {
    return a + b;
  } else if (expr === "-") {
    return a - b;
  } else if (expr === "*") {
    return a * b;
  } else {
    // We want to round the value to ZERO, hence this circus was needed
    const val = a / b;
    if (val > 0) {
      return Math.floor(val);
    } else {
      return Math.ceil(val);
    }
  }
}
