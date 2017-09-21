import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar2';

export default class CarsOutside extends Component {
  render() {
    return (
      <div>
        CarsOutside view
        <NavBar selectedIndex={3}/>
      </div>
    );
  }
}
