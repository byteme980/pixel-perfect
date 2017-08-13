import React from 'react';
import bucketFillIcon from './assets/bucket_fill.png';
import paintBrushIcon from './assets/paintbrush.png';
import eraserIcon from './assets/eraser.png';
import './tools.css';

const Tool = ({title, onClick, icon, isSelected}) => {
  return (
    <button onClick={onClick} className={'tool ' + title + (isSelected ? ' selected' : '')} title={title}>
       <img src={icon} alt={title} />
    </button>
  )
}


const Tools = ({selectBucketFill, selectPaintBrush, selectEraser, toolSelected}) => (
  <div className='tools-container'>
    <Tool key='bucket fill' onClick={selectBucketFill} title='fill' icon={bucketFillIcon} isSelected={toolSelected === 'bucketFill'}/>
    <Tool key='paint brush' onClick={selectPaintBrush} title='paint' icon={paintBrushIcon} isSelected={toolSelected === 'paintBrush'}/>
    <Tool key='erase' onClick={selectEraser} title='erase' icon={eraserIcon} isSelected isSelected={toolSelected === 'eraser'}/>
  </div>
)

export default Tools;
