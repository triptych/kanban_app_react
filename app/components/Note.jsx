import React from 'react';
//export default ({task}) => <div className='note'>{task}</div>;

export default ({children, ...props}) => (
  <div {...props}>
    {children}
  </div>
);