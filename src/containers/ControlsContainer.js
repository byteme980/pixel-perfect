import Controls from '../components/Controls'
import {connect} from 'react-redux'
import {clearCanvas, selectPaintBrush, selectBucketFill, selectEraser} from '../redux/actions/canvas';
import { ActionCreators as UndoActionCreators } from 'redux-undo'


let mapStateToProps = (state) => ({
  canUndo: state.canvas.past.length > 0,
  canRedo: state.canvas.future.length > 0
});

let mapDispatchToProps = (dispatch) => {
  return {
    clearCanvas: () => {
      dispatch(clearCanvas());
    },
    undo: () => {
      dispatch(UndoActionCreators.undo());
    },
    redo: () => {
      dispatch(UndoActionCreators.redo());
    },
    selectBucketFill: () => {
      dispatch(selectBucketFill());
    },
    selectEraser: () => {
      dispatch(selectEraser());
    },
    selectPaintBrush: () => {
      dispatch(selectPaintBrush());
    }
  }
}

const ControlsContainer =  connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);

export default ControlsContainer;
