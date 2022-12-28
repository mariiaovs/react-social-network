import reportWebVitals from './reportWebVitals';
import store from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
  
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App state={state}
      dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>
  </BrowserRouter>
);
}

rerenderEntireTree (store.getState());

store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
