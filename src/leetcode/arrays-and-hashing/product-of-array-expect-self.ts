function productExceptSelf(nums: number[]): number[] {
  // Create an array to store the product of values to the left of current value
  const left: number[] = [];
  // Create an array to store the product of values to the right of current value
  const right: number[] = [];

  // Loop over the array to calculate the leftProduct & rightProducts
  for (let i = 0; i < nums.length; i++) {
    // Add to left array
    const leftValue = nums[i];
    const lPush = (left.at(-1) === undefined ? 1 : left.at(-1)) * leftValue;
    left.push(lPush);

    // Add to right array
    const rightValue = nums[nums.length - 1 - i];
    const rPush = (right.at(-1) === undefined ? 1 : right.at(-1)) * rightValue;
    right.push(rPush);
  }
  // Reverse the right array, as we were initially adding numbers in opposite way
  right.reverse();

  // Create a result array to be returned
  const result = [];
  // Loop over the values, and add the product to the resultant array
  for (let i = 0; i < nums.length; i++) {
    // Value of num[i] = left[i-1] * right[i+1]
    const value =
      (left[i - 1] === undefined ? 1 : left[i - 1]) *
      (right[i + 1] === undefined ? 1 : right[i + 1]);
    result.push(value);
  }
  // Return the result
  return result;
}
