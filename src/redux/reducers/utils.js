const isWithinGrid = (grid, row, col) => {
  let numRows = grid.length;
  let numCols = grid[0].length;
  return (row >= 0 && row < numRows) && (col >= 0 && col < numCols);
};

export const bucketFillIterative = (grid, row, col, targetColor) => {
  const currColor = grid[row][col];
  // if the node selected is the target color, it doesn't make sense to bucket fill
  if (currColor === targetColor) {
    return;
  }

  let newGrid = grid.map((row, r) => (
    row.map((col, c) => (
      '' + grid[r][c]
    ))
  ));

  let cellsToExplore = [[row,col]];
  var visited = new Set();
  while (cellsToExplore.length > 0) {
    let cell = cellsToExplore.pop();
    let currRow = cell[0];
    let currCol = cell[1];
    newGrid[currRow][currCol] = targetColor;
    visited.add(String(cell));

    // add the cells to the top, right, down, and left
    let neighborsToCheck = [
      [currRow-1, currCol], // up
      [currRow, currCol+1], //right
      [currRow+1, currCol], // down
      [currRow, currCol-1]
    ]

    neighborsToCheck.forEach((neighbor) => {
      if (isWithinGrid(newGrid, neighbor[0], neighbor[1]) && newGrid[neighbor[0]][neighbor[1]] === currColor && !visited.has(String(neighbor))) {
        cellsToExplore.push([neighbor[0], neighbor[1]]);
      }
      visited.add(String(neighbor));
    });
  }

  return newGrid;
}

const bucketFill = (grid, row, col, originalColor, targetColor) => {
  if (!isWithinGrid(grid, row, col) || originalColor === targetColor || grid[row][col] !== originalColor) {
    return;
  } else {
    grid[row][col] = targetColor;
    bucketFill(grid, row-1, col, originalColor, targetColor);
    bucketFill(grid, row, col+1, originalColor, targetColor);
    bucketFill(grid, row+1, col, originalColor, targetColor);
    bucketFill(grid, row, col-1, originalColor, targetColor);
  }
}

export const bucketFillRecursive = (grid, row, col, targetColor) => {
  let newGrid = grid.map((row, r) => (
    row.map((col, c) => (
      '' + grid[r][c]
    ))
  ));
  bucketFill(newGrid, row, col, grid[row][col], targetColor);
  return newGrid;
}
