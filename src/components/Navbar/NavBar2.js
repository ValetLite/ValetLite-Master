import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

export default class NavBar extends Component {
  state = {
    selectedIndex: this.props.selectedIndex || 0,
  };
  render() {
    return (
      <Paper zDepth={1} style={{bottom: 0, position: 'absolute'}}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Retrieve Car"
            icon={recentsIcon}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Store Car"
            icon={favoritesIcon}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Cars Inside"
            icon={nearbyIcon}
            onClick={() => this.select(2)}
          />
          <BottomNavigationItem
            label="Cars Outside"
            icon={nearbyIcon}
            onClick={() => this.select(3)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}
