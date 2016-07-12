import React from 'react';
import ReactDOM from 'react-dom';

//import Notes from './components/Notes';

import App from './components/App';

import Provider from './components/Provider';

/**
if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}
**/

ReactDOM.render(
  // <div>Hello World!</div>,
  
  // <Notes />,
  // <App />,
  <Provider><App /></Provider>,
  document.getElementById('app')
);
