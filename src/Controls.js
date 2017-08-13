import React from 'react';
import undoIcon from './assets/undo.png';
import redoIcon from './assets/redo.png';
import clearIcon from './assets/blank.jpg';
import bucketFillIcon from './assets/bucket_fill.png';
import paintBrushIcon from './assets/paintbrush.png';
import eraserIcon from './assets/eraser.png';
import './controls.css';

const Control = ({title, onClick, icon}) => (
  <button onClick={onClick} className={'control ' + title}>
     <img src={icon} alt={title}/>
     {title}
  </button>
)

const Controls = ({clearCanvas, undo, redo, selectBucketFill, selectPaintBrush, selectEraser}) => (
  <div className='controls-container'>
    <Control key='undo' onClick={undo} title='undo' icon={undoIcon} />
    <Control key='redo' onClick={redo} title='redo' icon={redoIcon}/>
    <Control key='clear' onClick={clearCanvas} title='clear' icon={clearIcon}/>
    <Control key='bucket fill' onClick={selectBucketFill} title='fill' icon={bucketFillIcon}/>
    <Control key='paint brush' onClick={selectPaintBrush} title='paint' icon={paintBrushIcon}/>
    <Control key='erase' onClick={selectEraser} title='erase' icon={eraserIcon}/>
  </div>
)

export default Controls;
