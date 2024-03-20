class MinStack {
  // Create a stack to store the actual values
  stack: number[];
  // Create a stack to store the minimum values seen yet
  minStack: number[];

  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  /**
   * Method for pushing new values to the stack
   * @param val - Value to be pushed to the stack
   */
  push(val: number): void {
    // Push the value to the regular stack
    this.stack.push(val);

    let minVal: number;
    // If the minstack already contains an element
    if (this.minStack.length) {
      // Use the min of current value & last value in min-stack
      minVal = Math.min(val, this.minStack.at(-1) as number);
    }
    // If the min-stack is empty, its the first value that is being pushed
    else {
      // Use the new value as min-value
      minVal = val;
    }
    // Push the min-value to minStack
    this.minStack.push(minVal);
  }

  /**
   * Pop the top value from the stack
   */
  pop(): void {
    // Pop the value from both the stacks to maintain consistency
    this.minStack.pop();
    this.stack.pop();
  }

  /**
   * Return the top value from the stack
   * @returns - Top value from the stack
   */
  top(): number {
    // Return the last value from the regular stack
    return this.stack.at(-1) as number;
  }

  /**
   * Return the minimum value in the stack
   * @returns - Minimum value in the stack
   */
  getMin(): number {
    // Return this last value from the minStack
    return this.minStack.at(-1) as number;
  }
}
