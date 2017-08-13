import {
  SELECT_BUCKET_FILL, SELECT_PAINT_BRUSH, SELECT_ERASER
} from '../actions/canvas'

const initialState = {
  mode: 'paintBrush',
}

const modeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_BUCKET_FILL:
      return {mode: 'bucketFill'};
    case SELECT_PAINT_BRUSH:
      return {mode: 'paintBrush'};
    case SELECT_ERASER:
      return {mode: 'eraser'};
    default:
      return state;
  }
}

export default modeReducer;
