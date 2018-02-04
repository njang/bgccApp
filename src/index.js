import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom'
// import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render((
	<BrowserRouter>
	  <App />
	</BrowserRouter>
), document.getElementById('root'));
// registerServiceWorker();
