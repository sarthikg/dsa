export function linkedListIntersection(
  map: Record<string, string>,
  startPoints: string[],
): boolean {
  const seen: Record<string, number> = {};

  for (let i = 0; i < startPoints.length; i++) {
    let currentPoint = startPoints[i];

    // While the current point exists
    while (currentPoint) {
      if (seen[currentPoint] !== undefined) {
        // If the current point is seen for a different startPoint, its an intersection
        if (seen[currentPoint] !== i) return true;
        // If the current point is seen for the current startPoint, its a cycle
        else break;
      }

      // Append the current point to the seen object
      seen[currentPoint] = i;
      // Assign nextPoint to currentPoint
      const nextPoint = map[currentPoint];
      currentPoint = nextPoint;
    }
  }
  return false;
}

const a = { a: "b", r: "s", b: "c", x: "c", q: "r", y: "x", w: "z" };

console.log(linkedListIntersection(a, ["a", "q", "w"]));
console.log(linkedListIntersection(a, ["a", "c", "r"]));
console.log(linkedListIntersection(a, ["y", "z", "a", "r"]));
console.log(linkedListIntersection(a, ["a", "w"]));
