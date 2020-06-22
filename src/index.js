import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/styles.css';
import 'normalize-css';
import { NamesProvider } from './providers/names'


ReactDOM.render(
  <React.StrictMode>
    <NamesProvider>
      <App />
    </NamesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


