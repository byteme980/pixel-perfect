import {connect} from 'react-redux'
import Palette from '../components/Palette'
import {selectColor} from '../redux/actions/canvas';

// note: colors may be more customizable in the future, so they should be handled by redux (at least for now)
const mapStateToProps = state => {
  return {
    selectedColor: state.palette.color,
    colors: [
      ['#000000', '#ffffff', '#f44336'],
      ['#9c27b0', '#3f51b5', '#03a9f4'],
      ['#009688','#8bc34a','#ffeb3b'],
      ['#ff9980', '#795548', '#607d8b']
    ]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onColorPicked: (color) => {
      dispatch(selectColor(color));
    }
  }
}

const PaletteContainer =  connect(
  mapStateToProps,
  mapDispatchToProps
)(Palette);

export default PaletteContainer;
