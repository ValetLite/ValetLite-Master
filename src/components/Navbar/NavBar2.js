import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router-dom';


import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationSearching from 'material-ui/svg-icons/device/location-searching';
import IconLocationStore from 'material-ui/svg-icons/action/store';
import IconDirectionsCar from 'material-ui/svg-icons/maps/directions-car';




import RetrieveCar from '../RetrieveCar/RetrieveCar.js';
import StoreCar from '../StoreCar/StoreCar.js';
import VehiclePostsIndex from '../VehiclePosts/vehicle_posts_index';
// import CarsInside from '../CarsInside/CarsInside.js';
import CarsOutside from '../CarsOutside/CarsOutside.js';

const recentsIcon = <IconLocationSearching />;
const favoritesIcon = <IconLocationStore />;
const carIcon = <IconDirectionsCar />;

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
            label="Inside"
            icon={carIcon}
            onClick={() => window.location='/vehicles'}
          />
          <BottomNavigationItem
            label="Outside"
            icon={carIcon}
            onClick={() => window.location='/carsoutside'}
          />

        </BottomNavigation>
      </Paper>
    );
  }
}
