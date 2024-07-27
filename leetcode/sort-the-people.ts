export function sortPeople(names: string[], heights: number[]): string[] {
  // Perform selection-sort
  for (let i = 0; i < heights.length - 1; i++) {
    const maxValue = [heights[i], i];
    for (let j = i + 1; j < heights.length; j++) {
      const currValue = heights[j];
      if (currValue > maxValue[0]) {
        maxValue[0] = currValue;
        maxValue[1] = j;
      }
    }
    // Swap the min-element with the i'th element
    const temp = heights[i];
    heights[i] = heights[maxValue[1]];
    heights[maxValue[1]] = temp;
    // Swap the names
    const tempName = names[i];
    names[i] = names[maxValue[1]];
    names[maxValue[1]] = tempName;
  }
  return names;
}
