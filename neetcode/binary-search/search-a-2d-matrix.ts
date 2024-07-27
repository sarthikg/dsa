function searchMatrix(matrix: number[][], target: number): boolean {
  // Create left & right pointers
  let fLeft = 0;
  let fRight = matrix.length - 1;

  // Store the rowCount for the row to search in. Starting it with 0 to handle cases where there is a single row
  let rowCount = 0;

  // Search the immediate lesser element in the first column
  while (fLeft <= fRight) {
    const mid = Math.floor(fLeft + (fRight - fLeft) / 2);
    if (matrix[mid][0] === target) {
      return true;
    } else if (matrix[mid][0] < target) {
      // Store the mid index during every iteration as it can be the row to be searched
      rowCount = mid;
      fLeft = mid + 1;
    } else {
      fRight = mid - 1;
    }
  }

  // Create new left & right pointers
  let left = 0;
  let right = matrix[rowCount].length - 1;

  // Search the element in the resultant row
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (matrix[rowCount][mid] === target) {
      return true;
    } else if (matrix[rowCount][mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // Element did not exist in the matrix, return false
  return false;
}
