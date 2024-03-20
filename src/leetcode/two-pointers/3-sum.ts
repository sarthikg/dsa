function threeSum(nums: number[]): number[][] {
  // Sort the numbers to ease the logic for excluding duplicate arrays in result
  nums.sort((a, b) => a - b);
  // Pointer for the first number
  let firstNum = 0;

  // Array for result
  let result: number[][] = [];

  // Loop over the list, essentially fixing the first element, and calculating twoSum of the right-side of the fixed element
  while (firstNum < nums.length - 2) {
    // For the sum of 3 numbers to be 0, sum of 2 numbers should be equal to negative of 3rd number
    const target = -1 * nums[firstNum];
    // Run twoSum on the right-side of the array
    const twoSumResult = twoSum(nums, firstNum + 1, target, nums[firstNum]);
    // Push the results in the result array
    result = result.concat(twoSumResult);

    // Move the firstNumber pointer to the right
    firstNum += 1;
    // Keep moving the firstNumber pointer to the right, while firstNumber pointer is the same value
    // This is done to prevent running twoSum on the same initial value, removing duplicate arrays
    while (nums[firstNum - 1] === nums[firstNum]) {
      firstNum += 1;
    }
  }
  // Return the result
  return result;
}

function twoSum(
  nums: number[],
  start: number,
  target: number,
  firstNum: number,
): number[][] {
  // Create a result array
  const result = [];

  // Create left & right pointers
  let left = start;
  let right = nums.length - 1;

  // While the left & right pointers overlap
  while (left < right) {
    // Calculate the sum of the left & right value
    const sum = nums[left] + nums[right];
    // If sum equals the target, push the array of values to result
    if (sum === target) {
      result.push([firstNum, nums[left], nums[right]]);
      // Keep moving the left pointer to the right, while left value is the same
      left += 1;
      while (nums[left - 1] === nums[left]) {
        left += 1;
      }
    }
    // If the sum is less than the target, move the left pointer to the right
    else if (sum < target) {
      left += 1;
    }
    // If the sum of more than the target, move the right pointer to the left
    else {
      right -= 1;
    }
  }
  // Return the result of the twoSum
  return result;
}
