import Tools from '../components/Tools'
import {connect} from 'react-redux'
import {selectPaintBrush, selectBucketFill, selectEraser} from '../redux/actions/canvas';


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
