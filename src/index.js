import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Welcome from './Welcome';
import Dashboard from './Dashboard';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    
    <Dashboard />
  </React.StrictMode>,
  document.getElementById('root')
);
//<Welcome />
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();