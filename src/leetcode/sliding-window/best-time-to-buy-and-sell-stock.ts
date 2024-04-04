function maxProfit(prices: number[]): number {
  // Create left & right pointers
  let left = 0;
  let right = 1;

  // Variable for storing the max profit noted till now
  let maxProfit = 0;

  // While right pointer doesn't overflow
  while (right < prices.length) {
    // Calculate the current profit (right - left)
    maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
    // Move the pointers
    if (prices[right] < prices[left]) {
      // If there is a new low price, move the left pointer to that price, as every next price can now have a
      // larger profit.
      left = right;
      // Increment the right pointer
      right += 1;
    } else {
      // Left value was already at a minima, hence explore for higher sell prices on its right
      right += 1;
    }
  }

  // Return the max profit
  return maxProfit;
}
