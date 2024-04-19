/**
 * Definition for a graph node.
 */
class GraphNode {
  val: number;
  neighbours: GraphNode[];
  constructor(val: number, neighbours: GraphNode[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbours = neighbours;
  }
}

export function depthFirstSearch(root: GraphNode | null): number[] {
  // Early exit incase the root node is null
  if (!root) {
    return [];
  }

  // Create an array to store the values in the graph
  const result: number[] = [root.val];
  // Create a stack to store the set of previous nodes to backtrack to
  const stack: GraphNode[] = [root];

  // While there are elements in the stack
  while (stack.length) {
    // Pick the node from the stack
    const node = stack.pop() as GraphNode;
    // Loop over each neighbour of the node
    for (let i = 0; i < node.neighbours.length; i++) {
      const neighbour = node.neighbours[i];
      // Check if the neighbour is not already seen
      if (!result.includes(neighbour.val)) {
        // Push the value of the neighbour into the result array
        result.push(node.val);
        // Add the neighbour to the stack, i.e. publish it for being explored later on.
        stack.push(node);
      }
    }
  }
  // Return the resulant array
  return result;
}
