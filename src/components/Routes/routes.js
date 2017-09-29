import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


import Login from '../Login/Login';
// import NavBar from '../Navbar/NavBar2';
import RetrieveCar from '../RetrieveCar/RetrieveCar.js';
import RetrievalInfo from '../RetrievalInfo'
import StoreCar from '../StoreCar/StoreCar.js';
import VehiclePostsIndex from '../VehiclePosts/vehicle_posts_index';
// import CarsInside from '../CarsInside/CarsInside.js';
import CarsOutside from '../CarsOutside/CarsOutside.js';

import ValetAdd from '../Valets/valets_add';
import ValetDetails from '../Valets/valets_details';
import ValetsIndex from '../Valets/valets_index';
import VehiclePostsNew from '../VehiclePosts/vehicle_posts_new';
import VehiclePostsShow from '../VehiclePosts/vehicle_posts_show';
import Admin from '../Admin'
import StoreCarLookup from '../StoreCarLookup'

export default class Routing extends Component{
  render(){
    const FourOhFour=()=><h1>404</h1>
    return <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/retrieval/carinfo' component={RetrievalInfo} />
        <Route path='/retrieval' component={RetrieveCar} />
        <Route path='/storage/:id' component={StoreCar} />
        <Route path='/storage' component={StoreCarLookup} />
        <Route path='/carsoutside' component={CarsOutside} />
        <Route path='/valets/new' component={ValetAdd} />
        <Route path='/valets/:id' component={ValetDetails} />
        <Route path='/valets' component={ValetsIndex} />
        <Route path='/vehicles/new' component={VehiclePostsNew} />
        <Route path='/vehicles/:id' component={VehiclePostsShow} />
        <Route path='/vehicles' component={VehiclePostsIndex} />
        <Route path='/admin' component={Admin} />
        <Route component={FourOhFour} />
      </Switch>
    </BrowserRouter>
  }
}


        // <Route path='/carsinside' component={CarsInside} />
