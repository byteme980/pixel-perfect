import React, { Component } from 'react';

class Cell extends Component {
  constructor() {
    super();
    this.onCellHover = this.onCellHover.bind(this);
    this.onCellClick = this.onCellClick.bind(this);
  }
  onCellClick(e) {
    e.preventDefault();
    const {onClick, row, col} = this.props;
    onClick(row, col);
  }
  onCellHover() {
    const {onHover, actionOnHover, row, col} = this.props;
    actionOnHover && onHover(row, col);
  }
  render() {
    const {color, style} = this.props;
    return (
      <div style={{backgroundColor: color, ...style}} className="cell" onMouseOver={this.onCellHover} onClick={this.onCellClick}>
      </div>
    );
  }
}

export default Cell;
