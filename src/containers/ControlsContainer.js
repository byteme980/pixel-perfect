import Controls from '../Controls'
import {connect} from 'react-redux'
import {clearCanvas} from '../redux/actions/canvas';
import { ActionCreators as UndoActionCreators } from 'redux-undo'


let mapDispatchToProps = dispatch => {
  return {
    clearCanvas: () => {
      dispatch(clearCanvas());
    },
    undo: () => {
      dispatch(UndoActionCreators.undo())
    },
    redo: () => {
      dispatch(UndoActionCreators.redo())
    }
  }
}

const ControlsContainer =  connect(
  null,
  mapDispatchToProps
)(Controls);

export default ControlsContainer;
