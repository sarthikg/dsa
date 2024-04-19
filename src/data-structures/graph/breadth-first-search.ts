import { Queue } from "@datastructures-js/queue";

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

export function breadthFirstSearch(root: GraphNode | null): number[] {
  // Early exit incase the root node is null
  if (!root) {
    return [];
  }

  // Create an array to store the values in the graph
  const result: number[] = [root.val];
  // Create a queue to store the nodes which are to be visited in future
  const queue = new Queue<GraphNode>([root]);

  // While there are elements in the queue
  while (queue.size()) {
    // Pick the node from the queue
    const node = queue.dequeue();
    // Loop over each neighbour of the node
    for (let i = 0; i < node.neighbours.length; i++) {
      const neighbour = node.neighbours[i];
      // Check if the neighbour is not already seen
      if (!result.includes(neighbour.val)) {
        // Add the neighbour to the queue, i.e. publish it for being explored later on
        queue.enqueue(neighbour);
        // Push the value of the neighbour into the result array
        result.push(neighbour.val);
      }
    }
  }

  // Return the resulant array
  return result;
}
