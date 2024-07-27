function luckyNumbers(matrix: number[][]): number[] {
  const maxCol = new Array(matrix[0].length);
  function findMaxInCol(colCount: number): number {
    if (maxCol[colCount] === undefined) {
      const col: number[] = [];
      for (let j = 0; j < matrix.length; j++) {
        col.push(matrix[j][colCount]);
      }
      const maxValue = Math.max(...col);
      maxCol[colCount] = maxValue;
    }
    return maxCol[colCount];
  }

  const lucky: number[] = [];
  for (let i = 0; i < matrix.length; i++) {
    const minValue = [Infinity, -1];
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      const currValue = row[j];
      if (currValue < minValue[0]) {
        minValue[0] = currValue;
        minValue[1] = j;
      }
    }
    const maxInCol = findMaxInCol(minValue[1]);
    if (maxInCol === minValue[0]) {
      lucky.push(minValue[0]);
    }
  }

  return lucky;
}
