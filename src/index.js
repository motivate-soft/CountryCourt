import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.less';
import './App.css';
import AppLayout from './layouts/AppLayout'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <AppLayout />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
