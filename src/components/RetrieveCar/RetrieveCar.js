import React, { Component } from 'react';
import NavBar from '../Navbar/NavBar2';
import RaisedButton from 'material-ui/RaisedButton';

// import navbar from '../Navbar/navbar';

export default class RetrieveCar extends Component {
  render() {
    return (
      <div>
        <input className='form-control' type='text' placeholder='Car ID #' />
        <RaisedButton label="Retrieve!" primary={true} style={{margin: 12}} />
        <NavBar selectedIndex={0} />
      </div>
    );
  }
}
