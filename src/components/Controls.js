import React from 'react';
import undoIcon from '../assets/undo.png';
import redoIcon from '../assets/redo.png';
import clearIcon from '../assets/blank.jpg';
import '../styles/controls.css';

const Control = ({title, onClick, icon}) => (
  <button onClick={onClick} className={'control ' + title} title={title}>
     <img src={icon} alt={title} />
  </button>
)

const Controls = ({clearCanvas, undo, redo, selectBucketFill, selectPaintBrush, selectEraser}) => (
  <div className='controls-container'>
    <Control key='undo' onClick={undo} title='undo' icon={undoIcon} />
    <Control key='redo' onClick={redo} title='redo' icon={redoIcon}/>
    <Control key='clear' onClick={clearCanvas} title='clear' icon={clearIcon}/>
  </div>
)

export default Controls;
