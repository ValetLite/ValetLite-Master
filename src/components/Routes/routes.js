import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import VehiclePostsIndex from '../VehiclePosts/vehicle_posts_index';
import VehiclePostsNew from '../VehiclePosts/vehicle_posts_new';
import VehiclePostsShow from '../VehiclePosts/vehicle_posts_show';

export default class Routing extends Component{
  render(){
    return <BrowserRouter>
      <Switch>
        <Route path='/vehicles/new' component={VehiclePostsNew} />
        <Route path='/vehicles/:id' component={VehiclePostsShow} />
        <Route path='/vehicles' component={VehiclePostsIndex} />
      </Switch>
    </BrowserRouter>
  }
}
