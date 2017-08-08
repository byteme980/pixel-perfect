import React, { Component } from 'react';

export default class ClickableGrid extends Component {
  render(){
    let arrayGrid = [{
      color: 'hotpink',
      row: 0,
      id: 0,
      col: 0
    },
    {
      color: 'red',
      row: 0,
      id: 1,
      col: 1
    },
    {
      color: 'orange',
      row: 0,
      id: 2,
      col: 2
    },
    {
      color: 'green',
      row: 1,
      id: 3,
      col: 0
    },
    {
      color: 'blue',
      row: 1,
      id: 4,
      col: 1
    },
    {
      color: 'orange',
      row: 1,
      id: 5,
      col: 2
    },
    {
      color: 'green',
      row: 2,
      id: 6,
      col: 0
    },
    {
      color: 'green',
      row: 2,
      id: 7,
      col: 1
    },    {
          color: 'yellow',
          row: 2,
          id: 8,
          col: 2
        },
  ]
    let width = 3;
    let height = 3;
    let cellDimensions = {width: '20px', height: '20px'};

    let cells = arrayGrid.map((cell) => (
        <div key={cell.id} style={{backgroundColor: cell.color, width: cellDimensions.width, height: cellDimensions.height}} onClick={() =>{console.log('row, col: ' + cell.row + ',' + cell.col)}} ></div>
    ));

    return (
      <div className='clickable-grid' style={{width: '60px', display: 'flex', flexWrap: 'wrap'}}>
        {cells}
      </div>
    )
  }
}
