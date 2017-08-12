import React, {Component} from 'react';
import Cell from './Cell';
import './canvas.css';

class Canvas extends Component {
  constructor() {
    super();
    this.paintWithColor = this.paintWithColor.bind(this);
  }
  paintWithColor(row, col) {
    const {onSquarePaint, color} = this.props;
    onSquarePaint(row, col, color);
  }
  render() {
    let {colorGrid, isPainting, startPainting, stopPainting} = this.props;
    let cells = colorGrid.map((row, r) => (
      <div className='canvas-row' key={'row-' + r} onMouseDown={startPainting} onMouseUp={stopPainting}>
        {
          row.map((col, c) => (
            <Cell color={colorGrid[r][c]} actionOnHover={isPainting} onHover={this.paintWithColor} onClick={this.paintWithColor} key={r + ',' + c}  row={r} col={c}/>
          ))
        }
      </div>
    ))

    return (
      <div className='canvas-container'>
        {cells}
      </div>
    )
  }
}

export default Canvas;
