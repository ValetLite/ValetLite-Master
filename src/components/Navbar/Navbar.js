// import React, {Component} from 'react';
// import FontIcon from 'material-ui/FontIcon';
// import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
// import Paper from 'material-ui/Paper';
// import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

// import RetrieveCar from '../RetrieveCar/RetrieveCar';
// import StoreCar from '../StoreCar/StoreCar';
// import CarsInside from '../CarsInside/CarsInside';
// import CarsOutside from '../CarsOutside/CarsOutside';

// const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
// const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
// const nearbyIcon = <IconLocationOn />;

// /**
//  * A simple example of `BottomNavigation`, with three labels and icons
//  * provided. The selected `BottomNavigationItem` is determined by application
//  * state (for instance, by the URL).
//  */
// export default class NavBar extends Component {
//   state = {
//     selectedIndex: 0,
//   };

//   select = (index) => this.setState({selectedIndex: index});

//   render() {
//   const activeView = i => {
//     switch (i){
//       case 0:
//         return <RetrieveCar />;
//         break;
//       case 1:
//         return <StoreCar />;
//         break;
//       case 2:
//         return <CarsInside />;
//         break;
//       case 3:
//         return <CarsOutside />;
//         break;
//     }
//   }
//     return (
//       <div>
//         { activeView(this.state.selectedIndex) }
//         <Paper zDepth={1} style={{bottom: 0, position: 'absolute'}}>
//           <BottomNavigation selectedIndex={this.state.selectedIndex}>
//             <BottomNavigationItem
//               label="Retrieve Car"
//               icon={recentsIcon}
//               onClick={() => this.select(0)}
//             />
//             <BottomNavigationItem
//               label="Store Car"
//               icon={favoritesIcon}
//               onClick={() => this.select(1)}
//             />
//             <BottomNavigationItem
//               label="Cars Inside"
//               icon={nearbyIcon}
//               onClick={() => this.select(2)}
//             />
//             <BottomNavigationItem
//               label="Cars Outside"
//               icon={nearbyIcon}
//               onClick={() => this.select(3)}
//             />
//           </BottomNavigation>
//         </Paper>
//       </div>
//     );
//   }
// }





// // // import React, { Component } from 'react';
// // // import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

// // // class MyNav extends Component {
// // //   constructor(props) {
// // //     super(props);

// // //     this.toggle = this.toggle.bind(this);
// // //     this.state = {
// // //       isOpen: false
// // //     };
// // //   }
// // //   toggle() {
// // //     this.setState({
// // //       isOpen: !this.state.isOpen
// // //     });
// // //   }
// // //   render() {
// // //     return (
// // //       <div>
// // //         <Navbar color="faded" light toggleable>
// // //           <NavbarToggler right onClick={this.toggle} />
// // //           <NavbarBrand href="/">When?</NavbarBrand>
// // //           <Collapse isOpen={this.state.isOpen} navbar>
// // //             <Nav className="ml-auto" navbar>
// // //               <NavItem>
// // //                 <NavLink href="BLANK">BLANK</NavLink>
// // //               </NavItem>
// // //               <NavItem>
// // //                 <NavLink href="/vehicles">Vehicles</NavLink>
// // //               </NavItem>
// // //               <NavLink href="BLANK">BLANK</NavLink>
// // //             </Nav>
// // //           </Collapse>
// // //         </Navbar>
// // //       </div>
// // //     );
// // //   }
// // // }

// // // export default MyNav;
