import React from 'react';
//export default ({task}) => <div className='note'>{task}</div>;


export default ({task, onDelete}) => (
  <div>
    <span>{task}</span>
    <button onClick={onDelete}>x</button>
  </div>
)