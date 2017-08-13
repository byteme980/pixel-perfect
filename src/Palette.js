import React, {Component} from 'react';
import Cell from './Cell';

class Palette extends Component {
  constructor(props){
    super(props);
    this.onCellClick = this.onCellClick.bind(this)
  }
  onCellClick(row, col) {
    const {colors, onColorPicked} = this.props;
    onColorPicked(colors[row][col]);
  }
  computeCellStyle(row,col) {
    const {selectedColor, colors} = this.props;
    if (colors[row][col] === selectedColor) {
      return {borderBottom: '8px solid lightblue'};
    }
  }

  render() {
    const {colors} = this.props;
    const cells = colors.map((row, r) => (
      row.map((col, c) => (
          <Cell style={this.computeCellStyle(r, c)} key={r + ', ' + c} row={r} col={c} color={colors[r][c]} onClick={this.onCellClick}/>
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
