import Canvas from '../Canvas'
import {connect} from 'react-redux'
import {paintSquare, startPainting, stopPainting} from '../redux/actions/canvas';

let mapStateToProps = state => {
  return {
    colorGrid: state.canvas.present.canvas,
    isPainting: state.palette.isPainting,
    color: state.palette.color
  }
}

let mapDispatchToProps = dispatch => {
  return {
    onSquarePaint: (x,y, color) => {
      dispatch(paintSquare(x,y, color));
    },
    startPainting: () => {
      dispatch(startPainting());
    },
    stopPainting: () => {
      dispatch(stopPainting());
    }
  }
}

const CanvasContainer =  connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas);

export default CanvasContainer;
