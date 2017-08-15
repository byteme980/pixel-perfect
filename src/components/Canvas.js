import React, {Component} from 'react';
import Cell from './Cell';
import '../styles/canvas.css';

class Canvas extends Component {
  constructor() {
    super();
    this.paintWithColor = this.paintWithColor.bind(this);
  }
  paintWithColor(row, col) {
    console.log('in canvas paint w color')
    const {onSquarePaint, color, mode} = this.props;
    onSquarePaint(row, col, color, mode);
  }
  render() {
    let {colorGrid, isPainting, startPainting, stopPainting, mode} = this.props;
    let cells = colorGrid.map((row, r) => (
      <div className='canvas-row' key={'row-' + r} onTouchStart={startPainting} onTouchEnd={stopPainting} onMouseDown={startPainting} onMouseUp={stopPainting}>
        {
          row.map((col, c) => (
            <Cell color={colorGrid[r][c]} actionOnHover={isPainting} onHover={this.paintWithColor} onClick={this.paintWithColor} key={r + ',' + c}  row={r} col={c}/>
          ))
        }
      </div>
    ))

    return (
      <div className={'canvas-container ' + mode}>
        {cells}
      </div>
    )
  }
}

export default Canvas;
