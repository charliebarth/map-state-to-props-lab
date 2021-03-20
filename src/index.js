import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {createStore} from 'redux'

import manageUsers from './reducers/manageUsers'
import { Provider } from 'react-redux';


// add imports and code


ReactDOM.render(
  // add imports and code
  <Provider state ={state}>
  <App />
  </ Provider>
  ,
  document.getElementById('root')
);