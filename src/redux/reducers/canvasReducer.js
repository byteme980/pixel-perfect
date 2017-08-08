import {
  CLEAR_CANVAS, PAINT_SQUARE
} from '../actions/canvas';
import undoable, {distinctState} from 'redux-undo';

function setUpClearPixelGrid() {
  const dimensions = {
    width: 25,
    height: 25
  }
  var colorGrid = new Array(dimensions.width);
  for (var col = 0; col < dimensions.width; col++){
    colorGrid[col] = new Array(dimensions.height);
    for (var row = 0; row < dimensions.height; row++){
      colorGrid[col][row] = '#ffffff'
    }
  }
  return colorGrid;
}


// need to return a copy of the current grid, w one square updated
function updateSquare(grid, x, y, newValue) {
  return grid.map((col, xIndex) => (
    col.map((row, yIndex) => {
      if (xIndex === x && yIndex === y) {
        return newValue
      }
      return grid[xIndex][yIndex];
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
      let {x, y, color} = action;
      // if the square is already the desired color, don't return a whole new grid!
      if (state.canvas[x][y] === color) {
        return state;
      }
      let newCanvas = updateSquare(state.canvas, x, y, color);
      return {
        canvas: newCanvas
      }
    default:
      return state;
  }
}

const undoableCanvas = undoable(canvas, {
  filter: distinctState()
});

export default undoableCanvas;
