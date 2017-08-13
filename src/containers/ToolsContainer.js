import Tools from '../components/Tools'
import {connect} from 'react-redux'
import {clearCanvas, selectPaintBrush, selectBucketFill, selectEraser} from '../redux/actions/canvas';
import { ActionCreators as UndoActionCreators } from 'redux-undo'


let mapDispatchToProps = dispatch => {
  return {
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

let mapStateToProps = state => {
  return {
    toolSelected: state.mode.mode
  }
}
const ToolsContainer =  connect(
  mapStateToProps,
  mapDispatchToProps
)(Tools);

export default ToolsContainer;
