import React, { Component } from 'react';
import NavBar2 from '../NavBar/NavBar2';

export default class CarsOutside extends Component {
  render() {
    return (
      <div>
        CarsOutside view
        <NavBar2 selectedIndex={3}/>
      </div>
    );
  }
}
