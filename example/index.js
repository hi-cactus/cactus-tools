import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Index from '../src/index';
import Component from './components/index';

import './style/index.less';

function App() {
  return (
    <Provider store={store}>
      <Index />
      <Component />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
