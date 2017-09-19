import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

import RetrieveCar from '../RetrieveCar/RetrieveCar';
import StoreCar from '../StoreCar/StoreCar';
import CarsInside from '../CarsInside/CarsInside';
import CarsOutside from '../CarsOutside/CarsOutside';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
export default class NavBar extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <div>
        <RetrieveCar />
        <StoreCar />
        <CarsInside />
        <CarsOutside />
        <Paper zDepth={1}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              label="Recents"
              icon={recentsIcon}
              onClick={() => this.select(0)}
            />
            <BottomNavigationItem
              label="Favorites"
              icon={favoritesIcon}
              onClick={() => this.select(1)}
            />
            <BottomNavigationItem
              label="Nearby"
              icon={nearbyIcon}
              onClick={() => this.select(2)}
            />
            <BottomNavigationItem
              label="Nearby"
              icon={nearbyIcon}
              onClick={() => this.select(2)}
            />
          </BottomNavigation>
        </Paper>
      </div>
    );
  }
}





// // import React, { Component } from 'react';
// // import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

// // class MyNav extends Component {
// //   constructor(props) {
// //     super(props);

// //     this.toggle = this.toggle.bind(this);
// //     this.state = {
// //       isOpen: false
// //     };
// //   }
// //   toggle() {
// //     this.setState({
// //       isOpen: !this.state.isOpen
// //     });
// //   }
// //   render() {
// //     return (
// //       <div>
// //         <Navbar color="faded" light toggleable>
// //           <NavbarToggler right onClick={this.toggle} />
// //           <NavbarBrand href="/">When?</NavbarBrand>
// //           <Collapse isOpen={this.state.isOpen} navbar>
// //             <Nav className="ml-auto" navbar>
// //               <NavItem>
// //                 <NavLink href="BLANK">BLANK</NavLink>
// //               </NavItem>
// //               <NavItem>
// //                 <NavLink href="/vehicles">Vehicles</NavLink>
// //               </NavItem>
// //               <NavLink href="BLANK">BLANK</NavLink>
// //             </Nav>
// //           </Collapse>
// //         </Navbar>
// //       </div>
// //     );
// //   }
// // }

// // export default MyNav;
