import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'
import store from './redux/store'
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
//window.store = store;
ReactDOM.render(
  <Provider store = {store}>
   
    
      <App />
    
  
  </Provider>,
  
  document.getElementById('root')
);


