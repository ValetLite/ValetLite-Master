import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';
import './index.css';


import VehiclePostsIndex from './components/VehiclePosts/vehicle_posts_index';
import VehiclePostsNew from './components/VehiclePosts/vehicle_posts_new';
import VehiclePostsShow from './components/VehiclePosts/vehicle_posts_show';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
      <Switch>
      <Route path='/vehicles/new' component={VehiclePostsNew} />
      <Route path='/vehicles/:id' component={VehiclePostsShow} />
      <Route path='/vehicles' component={VehiclePostsIndex} />
      </Switch>
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
