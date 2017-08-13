export const START_PAINTING = 'canvas/START_PAINTING';
export const STOP_PAINTING = 'canvas/STOP_PAINTING';
export const CLEAR_CANVAS = 'canvas/CLEAR_CANVAS';
export const FLOOD_FILL = 'canvas/CONTROL_FLOOD_FILL';
export const PAINT_SQUARE = 'canvas/PAINT_SQUARE';
export const SELECT_COLOR = 'canvas/SELECT_COLOR';
export const SELECT_BUCKET_FILL = 'canvas/SELECT_BUCKET_FILL';
export const SELECT_PAINT_BRUSH = 'canvas/SELECT_PAINT_BRUSH';
export const SELECT_ERASER = 'canvas/SELECT_ERASER';

export const selectColor = (color) => ({
  type: SELECT_COLOR,
  color
})
export const startPainting = () => ({
  type: START_PAINTING
});

export const stopPainting = () => ({
  type: STOP_PAINTING
});

export const paintSquare = (row, col, color, mode) => ({
  type: PAINT_SQUARE, row, col, color, mode
});

export const clearCanvas = () => ({
  type: CLEAR_CANVAS
});

export const selectBucketFill = () => ({
  type: SELECT_BUCKET_FILL
});

export const selectEraser = () => ({
  type: SELECT_ERASER
})

export const selectPaintBrush = () => ({
  type: SELECT_PAINT_BRUSH
});
