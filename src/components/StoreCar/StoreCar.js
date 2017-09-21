import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar2';

export default class StoreCar extends Component {
  render() {
    return (
      <div>
        This is the storecar view
        <NavBar selectedIndex={1}/>
      </div>
    );
  }
}
