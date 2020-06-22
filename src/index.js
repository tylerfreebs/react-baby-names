import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/styles.css';
import 'normalize-css';
import { names } from './data';


ReactDOM.render(
  <React.StrictMode>
    <App names={names}/>
  </React.StrictMode>,
  document.getElementById('root')
);


