import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from '../Login/Login'
import ValetAdd from '../Valets/valets_add';
import ValetDetails from '../Valets/valets_details';
import ValetsIndex from '../Valets/valets_index';
import VehiclePostsIndex from '../VehiclePosts/vehicle_posts_index';
import VehiclePostsNew from '../VehiclePosts/vehicle_posts_new';
import VehiclePostsShow from '../VehiclePosts/vehicle_posts_show';

export default class Routing extends Component{
  render(){
    return <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/valets/new' component={ValetAdd} />
        <Route path='/valets/:id' component={ValetDetails} />
        <Route path='/valets' component={ValetsIndex} />
        <Route path='/vehicles/new' component={VehiclePostsNew} />
        <Route path='/vehicles/:id' component={VehiclePostsShow} />
        <Route path='/vehicles' component={VehiclePostsIndex} />
      </Switch>
    </BrowserRouter>
  }
}
