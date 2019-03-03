require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';

import { Provider } from "react-redux";
import configureStore from "./store/store";

import App from './'

render(
  <Provider store={configureStore()}>
    <App />
  </Provider>
, document.getElementById('app'));
