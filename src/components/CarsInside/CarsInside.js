import React, { Component } from 'react';
import NavBar2 from '../Navbar/NavBar2';

export default class CarsInside extends Component {
  render() {
    return (
      <div>
        CarsInside View
        <NavBar2 selectedIndex={2} />
      </div>
    );
  }
}
