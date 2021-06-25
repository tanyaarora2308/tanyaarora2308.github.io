import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Favicon from 'react-favicon'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Favicon url='https://i.postimg.cc/fb7Rbkth/glowing-neon-letter-on-dark-260nw-70498114-removebg-preview.png' />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
