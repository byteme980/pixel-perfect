import {
  START_PAINTING, STOP_PAINTING, SELECT_COLOR
} from '../actions/canvas';

const initialState = {
  isPainting: false,
  color: '#000000'
}

const paletteReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_PAINTING:
      return {
        ...state,
        isPainting: true
      }
    case STOP_PAINTING:
      return {
        ...state,
        isPainting: false
      }
    case SELECT_COLOR:
      let {color} = action;
      return {
        ...state,
        color
      }
    default:
      return state;
  }
}


export default paletteReducer;
