function maxArea(height: number[]): number {
  // Create a variable to store the max area seen till now
  let max = 0;

  // Create a left & a right pointer
  let start = 0;
  let end = height.length - 1;

  // Move the pointers till they overlap
  while (start < end) {
    // Calculate the area of the current container
    const area = Math.min(height[start], height[end]) * (end - start);
    // Replace the current area with the global maxima, if the area exceeds the largest area seen yet
    max = Math.max(area, max);

    // Move the pointer for the side with less height forward, as technically it was the bottleneck
    if (height[start] < height[end]) {
      start += 1;
    } else {
      end -= 1;
    }
  }
  // Return the result
  return max;
}
