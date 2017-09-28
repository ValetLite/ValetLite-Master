import React, {Component} from 'react';
import axios from 'axios';
let port=5555;


class stats extends Component{
  constructor(props){
    super(props);
    this.state={
      carsParked:0,
    }
  }

  async componentWillMount(){
    let response=await axios.get(`http://localHost:${port}/api/CarsParked`);
    this.setState({carsParked:response.data[0].cars_parked_after});
  }

  render(){
    return <div>
      <h2> Stats Component</h2>
      <h1> Cars currently parked: {this.state.carsParked}</h1>
    </div>

  }


}

export default stats;
