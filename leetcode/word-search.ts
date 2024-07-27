export function exist(board: string[][], word: string): boolean {
  const dirs = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];

  // Find all the start points
  const startPoints = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        startPoints.push([i, j]);
      }
    }
  }

  function recurse(
    x: number,
    y: number,
    wordIndex: number,
    seen: Record<string, boolean> = {},
  ): boolean {
    // If x or y goes beyond the borders, return false
    if (x < 0 || x >= board.length || y < 0 || y >= board[x].length) {
      return false;
    }
    // If the current index is already seen, return false
    if (seen[`${x | y}`]) {
      return false;
    }
    // If the current position doesn't equal the word at wordIndex, return false
    if (board[x][y] !== word[wordIndex]) {
      return false;
    }
    // If the wordIndex is at last index, return true
    if (wordIndex === word.length - 1) {
      return true;
    }
    const results = [];
    for (let i = 0; i < dirs.length; i++) {
      const res = recurse(dirs[i][0], dirs[i][1], wordIndex + 1, {
        ...seen,
        [`${x}|${y}`]: true,
      });
      results.push(res);
    }
    return results.some((r) => r === true);
  }

  // For each start point, recurse to see if the next word exists
  for (let i = 0; i < startPoints.length; i++) {
    if (recurse(startPoints[i][0], startPoints[i][1], 0)) {
      return true;
    }
  }
  return false;
}
