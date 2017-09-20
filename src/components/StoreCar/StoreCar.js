import React, { Component } from 'react';
import NavBar2 from '../NavBar/NavBar2';

export default class StoreCar extends Component {
  render() {
    return (
      <div>
        This is the storecar view
        <NavBar2 selectedIndex={1}/>
      </div>
    );
  }
}
