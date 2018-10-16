import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Import F7 Bundle
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7-React Plugin
import Framework7React from 'framework7-react';

// Init F7-React Plugin
Framework7.use(Framework7React);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
