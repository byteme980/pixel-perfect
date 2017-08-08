import React, {Component} from 'react';
import Cell from './Cell';

class Palette extends Component {
  constructor(props){
    super(props);
    this.onCellClick = this.onCellClick.bind(this)
  }
  onCellClick(x,y) {
    const {colors, onColorPicked} = this.props;
    onColorPicked(colors[x][y]);
  }
  computeCellStyle(x,y) {
    const {selectedColor, colors} = this.props;
    if (colors[x][y] === selectedColor) {
      return {borderBottom: '10px solid lightblue'};
    } else {
      return {};
    }
  }

  render() {
    const {colors} = this.props;

    let cells = colors.map((col, x) => (
        col.map((row, y) => (
            <Cell style={this.computeCellStyle(x,y)} key={x + ', ' + y} x={x} y={y} color={colors[x][y]} onClick={this.onCellClick}/>
        ))
    ));

    return (
      <div className='palette-container'>
        {cells}
      </div>
    )
  }
}

export default Palette;
