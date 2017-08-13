import { combineReducers } from 'redux'
import canvas  from './canvasReducer';
import palette from './paletteReducer';
import mode from './modeReducer';

export default combineReducers({
  canvas,
  palette,
  mode
})
