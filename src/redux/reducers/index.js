import { combineReducers } from 'redux'
import canvas  from './canvasReducer';
import palette from './paletteReducer';

export default combineReducers({
  canvas,
  palette
})
