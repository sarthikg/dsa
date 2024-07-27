function isValidSudoku(board: string[][]): boolean {
  // Validate Rows
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    if (validateRow(row) === false) {
      return false;
    }
  }
  // Validate Columns
  for (let i = 0; i < board.length; i++) {
    const column = [];
    for (let j = 0; j < board.length; j++) {
      column.push(board[j][i]);
    }
    if (validateRow(column) === false) {
      return false;
    }
  }
  // Validate Sub-Box
  for (let i = 0; i < board.length; i += 3) {
    for (let j = 0; j < board.length; j += 3) {
      const box = [];
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          box.push(board[i + k][j + l]);
        }
      }
      if (validateRow(box) === false) {
        return false;
      }
    }
  }
  return true;
}

/**
 * Accept a list and check if the list contain all unique values
 * @param list - List of strings in the input sudoku
 * @returns - If the row doesn't contain any duplicate
 */
function validateRow(list: string[]): boolean {
  const seen: Record<string, boolean> = {};
  for (let i = 0; i < list.length; i++) {
    let value = list[i];
    if (value !== ".") {
      if (seen[value]) {
        return false;
      } else {
        seen[value] = true;
      }
    }
  }
  return true;
}
