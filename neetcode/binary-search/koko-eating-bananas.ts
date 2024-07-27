function minEatingSpeed(piles: number[], h: number): number {
  // Create left & right pointers
  let left = 1; // Minimum eating speed shall be 1
  let right = Math.max(...piles); // Maximum eating speed can be max(piles)

  // Create a variable to store the min speed at which bananas could be eated in time
  let minK = right;

  // Since we know the minimum & maximum speed, we now try to find the most optimum speed
  // For this, we run binary-search on the min & max speeds
  while (left <= right) {
    // Find the mid-element, i.e. the current speed for which to verify
    const mid = Math.floor(left + (right - left) / 2);
    // Calculate the total time taken to eat all piles with the current speed
    const time = piles.reduce((prev, curr) => prev + Math.ceil(curr / mid), 0);

    // If the time taken is less than the given time, store the result & try for a lower speed
    if (time <= h) {
      // Store the current eating speed
      minK = Math.min(minK, mid);
      // We can try reducing the eating speed
      right = mid - 1;
    }
    // If the time taken is more than the given time, try for a higher speed
    else {
      // We should be increading the eating speed
      left = mid + 1;
    }
  }
  // Return the result
  return minK;
}
