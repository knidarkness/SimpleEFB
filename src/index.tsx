import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { loadState } from './model';
import reportWebVitals from './reportWebVitals';
import AppCtx from './model/context';

ReactDOM.render(
  <React.StrictMode>
    <AppCtx.Provider value={loadState()}>
      <App />
    </AppCtx.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
