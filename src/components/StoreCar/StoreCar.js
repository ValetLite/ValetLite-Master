import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar2';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import axios from 'axios';

let port = 5555;



export default class StoreCar extends Component {
  constructor(props) {
    super(props);
    let carId=props.location.pathname.substr(props.location.pathname.lastIndexOf('/')+1)

    this.state = {
      carId:carId,
      customOption: false,
      recommendedSpot:-1,
    };
  }

  async componentWillMount(){
    let rawUsedSpots=await axios.get(`http://localhost:${port}/api/CarsParked`);
    let usedSpots=rawUsedSpots.data.map((cur)=>cur.space);

    console.log(usedSpots);
    let recommendedSpot=0;
    while(usedSpots.includes(++recommendedSpot));
    this.setState({recommendedSpot:recommendedSpot});
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
            Recommendation: {this.state.recommendedSpot}
            <RaisedButton label="Use Recommended Spot" primary={true} style={{margin: 12}} />

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
