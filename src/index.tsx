import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/main.scss';

import { Provider } from 'react-redux';
import { Store } from './Data/Store';

const stroe = Store();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={stroe}>
      <App />
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root'),
);
