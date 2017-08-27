import React, {Component} from 'react';
import Cell from './Cell';
import '../styles/canvas.css';

class Canvas extends Component {
  constructor() {
    super();
    this.paintWithColor = this.paintWithColor.bind(this);
    this.startPainting = this.startPainting.bind(this);
    this.stopPainting = this.stopPainting.bind(this);
  }
  paintWithColor(row, col) {
    const {onSquarePaint, color, mode} = this.props;
    onSquarePaint(row, col, color, mode);
  }
  startPainting(e) {
    this.props.startPainting();
  }
  stopPainting(e) {
    this.props.stopPainting();
  }
  render() {
    let {colorGrid, isPainting, startPainting, stopPainting, mode} = this.props;
    let cells = colorGrid.map((row, r) => (
      <div className='canvas-row' key={'row-' + r} onMouseDown={this.startPainting} onMouseUp={this.stopPainting}>
        {
          row.map((col, c) => (
            <Cell color={colorGrid[r][c]} actionOnHover={isPainting} onHover={this.paintWithColor} onClick={this.paintWithColor} key={r + ',' + c}  row={r} col={c}/>
          ))
        }
      </div>
    ))

    return (
      <div className={'canvas-container ' + mode} >
        {cells}
      </div>
    )
  }
}

export default Canvas;
