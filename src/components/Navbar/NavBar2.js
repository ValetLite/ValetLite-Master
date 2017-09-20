import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router-dom';


import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

import RetrieveCar from '../RetrieveCar/RetrieveCar.js';
import StoreCar from '../StoreCar/StoreCar.js';
import VehiclePostsIndex from '../VehiclePosts/vehicle_posts_index';
// import CarsInside from '../CarsInside/CarsInside.js';
import CarsOutside from '../CarsOutside/CarsOutside.js';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

export default class NavBar extends Component {
  render() {
    console.log(this.props);
    return (
      <Paper zDepth={1} style={{bottom: 0, position: 'absolute'}}>
        <BottomNavigation selectedIndex={this.props.selectedIndex}>
          <BottomNavigationItem
            label="Retrieve Car"
            icon={recentsIcon}
            onClick={() => window.location='/retrieval'}
          />
          <BottomNavigationItem
            label="Store Car"
            icon={favoritesIcon}
            onClick={() => window.location='/storage'}
          />
          <BottomNavigationItem
            label="Cars Inside"
            icon={nearbyIcon}
            onClick={() => window.location='/vehicles'}
          />
          <BottomNavigationItem
            label="Cars Outside"
            icon={nearbyIcon}
            onClick={() => window.location='/carsoutside'}
          />

        </BottomNavigation>
      </Paper>
    );
  }
}
