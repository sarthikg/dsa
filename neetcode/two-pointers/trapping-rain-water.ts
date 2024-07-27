function trap(height: number[]): number {
  // Store the current max-height that is seen
  let maxHeight = 0;
  // Result for the quantity of trapped water
  let trappedWater = 0;

  // Create left & right pointers
  let left = 0;
  let right = height.length - 1;

  // While the two pointers don't overlap
  while (left < right) {
    // Calculate the height supported by the left & right pointer
    const currHeight = Math.min(height[left], height[right]);
    // Replace the maxHeight global variable if the current height is greater
    maxHeight = Math.max(currHeight, maxHeight);

    // Calculate the water which can be added from the left pointer as trapped
    let leftWater = height[left] < maxHeight ? maxHeight - height[left] : 0;
    // Calculate the water which can be added from the right pointer as trapped
    let rightWater = height[right] < maxHeight ? maxHeight - height[right] : 0;
    // Add the left & right waters to the total trapped water
    trappedWater += leftWater + rightWater;

    // Move the pointer with less height forward
    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  // Return the total trapped water
  return trappedWater;
}
