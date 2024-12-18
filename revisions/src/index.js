import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './App';
import carCountReducer from "./carCountSlic";


const store = configureStore({
  reducer:{
    carCount: carCountReducer
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
    <App />
    </Provider>
);

