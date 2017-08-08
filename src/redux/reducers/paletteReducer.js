import {
  START_PAINTING, STOP_PAINTING, SELECT_COLOR
} from '../actions/canvas';

const initialState = {
  isPainting: false,
  color: '#ffffff'
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
    // case UNDO:
    //   console.log('need to implement undo');
    //   return state;
    // case REDO:
    //   console.log('need to implement redo');
    //   return state;
    default:
      console.log('got this kind of action: ' + action.type );
      return state;
  }
}


export default paletteReducer;
