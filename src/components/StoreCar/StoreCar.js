import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar2';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


export default class StoreCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customOption: false
    };
  }
  customSpotButton() {
    if (this.state.customOption) {
      return (
        <TextField id='ret-car-id' hintText='Spot #' />
      )
    }
    return (
      <RaisedButton label="Custom Spot" primary={true} style={{margin: 12}} onClick={() => this.setState({customOption: true})} />
    )
  }

  render() {
    // function changeOption() {
    //   this.setState({customOption: true});
    // }



    return (
      <div id='landing-container'>
        <div id='landing-form'>
          <div className='landing-flex'>
            <h4>Suggested Parking Spot</h4>
          </div>
          <div className='landing-flex'>
            <h5>Spot: [will recommend the spot location]</h5>
          </div>
          <div className='landing-flex'>
            <RaisedButton label="Recommended Spot" primary={true} style={{margin: 12}} />
          </div>
          <div className='landing-flex'>
            <h6>OR, choose a custom spot</h6>
          </div>
          <div className='landing-flex'>
            { this.customSpotButton() }
          </div>
        </div>
        <NavBar selectedIndex={1}/>
      </div>
    );
  }
}
