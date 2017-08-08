import React, { Component } from 'react';

class Cell extends Component {
  onCellClick(e) {
    e.preventDefault();
    const {onClick, x, y} = this.props;
    onClick(x, y);
  }
  onCellHover() {
    const {onHover, actionOnHover, x, y} = this.props;
    actionOnHover ? onHover(x,y) : console.log('not in painting mode');
  }
  render() {
    const {color, style} = this.props;
    return (
      <div style={{backgroundColor: color, ...style}} className="cell" onMouseOver={this.onCellHover.bind(this)} onClick={this.onCellClick.bind(this)}>
      </div>
    );
  }
}

export default Cell;
