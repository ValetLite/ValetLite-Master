import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import promise from 'redux-promise';
import reducers from './reducers';
import './index.css';

import Routes from './components/Routes/routes'



const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={createStoreWithMiddleware(reducers)} >
      <Routes />
    </Provider>
  </MuiThemeProvider>
  , document.querySelector('.container')
);
