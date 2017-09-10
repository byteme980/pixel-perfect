import {
  CLEAR_CANVAS, PAINT_SQUARE
} from '../actions/canvas';
import undoable, {distinctState} from 'redux-undo';
import {bucketFillIterative} from './utils';

function setUpClearPixelGrid() {
  const dimensions = {
    width: 25,
    height: 25
  }
  var colorGrid = new Array(dimensions.height);
  for (var row = 0; row < dimensions.height; row++) {
    colorGrid[row] = new Array(dimensions.width);
    for (var col = 0; col < dimensions.width; col++) {
      colorGrid[row][col] = '#ffffff';
    }
  }
  return colorGrid;
}


// need to return a copy of the current grid, w one square updated
function updateSquare(grid, rowIndex, colIndex, newValue) {
  return grid.map((row, r) => (
    row.map((col, c) => {
      if (r === rowIndex && c === colIndex) {
        return newValue
      }
      return grid[r][c];
    })
  ));
}

const initialState = {
  canvas: setUpClearPixelGrid()
}

const canvas = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_CANVAS:
      return {
        canvas: setUpClearPixelGrid()
      }
    case PAINT_SQUARE:
      let {row, col, color, mode} = action;
      // if the square is already the desired color, don't return a whole new grid!
      let newCanvas;

      //  if in erase mode, we want the paint color to be white
      if (mode === 'eraser') {
        color = '#ffffff';
      }

      // if the current square is equal to the target color, we return the current state
      if (state.canvas[row][col] === color) {
        return state;
      }

      if (mode === 'bucketFill') {
        newCanvas = bucketFillIterative(state.canvas, row, col, color);
      } else  {
        newCanvas = updateSquare(state.canvas, row, col, color);
      }

      return {
        canvas: newCanvas
      }
    default:
      return state;
  }
}

const undoableCanvas = undoable(canvas, {
  filter: distinctState(),
  limit: 10
});

export default undoableCanvas;
