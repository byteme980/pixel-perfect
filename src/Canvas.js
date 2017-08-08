import React, {Component} from 'react';
import Cell from './Cell';
import './canvas.css';

class Canvas extends Component {
  constructor() {
    super();
    this.paintWithColor = this.paintWithColor.bind(this);
  }
  paintWithColor(x,y) {
    const {onSquarePaint, color} = this.props;
    onSquarePaint(x,y, color);
  }
  render() {
    let {colorGrid, isPainting, startPainting, stopPainting} = this.props;

    let cells = colorGrid.map((col, i) => (
      <div className='canvas-col' key={'col-' + i} onMouseDown={startPainting} onMouseUp={stopPainting}>
        {
          col.map((row, j) => (
            <Cell color={colorGrid[i][j]} actionOnHover={isPainting} onHover={this.paintWithColor} onClick={this.paintWithColor} key={i + ',' + j} x={i} y={j}/>
          ))
        }
      </div>
    ));

    return (
      <div className='canvas-container'>
        {cells}
      </div>
    )
  }
}

export default Canvas;
