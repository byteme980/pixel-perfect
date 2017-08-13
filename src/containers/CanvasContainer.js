import Canvas from '../components/Canvas'
import {connect} from 'react-redux'
import {paintSquare, startPainting, stopPainting} from '../redux/actions/canvas';

let mapStateToProps = state => {
  return {
    colorGrid: state.canvas.present.canvas,
    isPainting: state.palette.isPainting,
    color: state.palette.color,
    mode: state.mode.mode
  }
}

let mapDispatchToProps = dispatch => {
  return {
    onSquarePaint: (row, col, color, mode) => {
      console.log('in action creator for square paint')
      dispatch(paintSquare(row, col, color, mode));
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
