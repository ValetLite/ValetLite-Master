import React, { Component } from 'react';
import NavBar2 from '../Navbar/NavBar2';
// import navbar from '../Navbar/navbar';

export default class RetrieveCar extends Component {
  render() {
    return (
      <div>
        this is the retrieval view
        <NavBar2 selectedIndex={0} />
      </div>
    );
  }
}
