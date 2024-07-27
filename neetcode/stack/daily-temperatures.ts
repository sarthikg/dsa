// Interface for the node to be added in the stack
interface Node {
  value: number;
  index: number;
}

function dailyTemperatures(temp: number[]): number[] {
  // Create a stack
  const stack: Node[] = [];
  // Create an empty array of the same length as temp but with 0 value instead
  const result = Array(temp.length).fill(0);

  // Loop over all the temperatures
  for (let i = 0; i < temp.length; i++) {
    // Create a node data-type for each temperature
    const node = { value: temp[i], index: i } as Node;

    // For each temperature, check if there exists a temperature in the stack which is less than current temperature
    // Break the while loop if a greater temperature is encountered, or the stack has no elements left
    while (stack.length && (stack.at(-1) as Node).value < node.value) {
      // Pop the last node from the stack
      const poppedNode = stack.pop() as Node;
      // Update the index of the popped node with the difference in indexes of the current node & popped node
      // This ideally will be the days after which a greater temperature is encountered
      result[poppedNode.index] = node.index - poppedNode.index;
    }

    // Push the current node in the stack
    stack.push(node);
  }

  // Return the result array
  return result;
}
