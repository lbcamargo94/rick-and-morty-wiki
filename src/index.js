import React from 'react';
import ReactDOM from 'react-dom';
import { WikiProvider } from './Utils/Provider';
import App from './App';
import './styles/index.css';

ReactDOM.render(
  (
  <WikiProvider>
    <App />
  </WikiProvider>
  ),
  document.getElementById('root'),
);

