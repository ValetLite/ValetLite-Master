import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar2';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';



export default class thing extends Component{
  constructor(props){
    super(props);
    this.state={
      carId:""
    }
  }

  handleChange(event){
    this.setState({carId:event.target.value})

  }

  render(){
    return(
    <div id='landing-container'>
      <div id='landing-form'>
        <div className='landing-flex'>
          <h4>Car storage</h4>
        </div>
        <div className='landing-flex'>
          <TextField id='ret-car-id' onChange={this.handleChange.bind(this)} hintText='Car ID #' value={this.state.carId}/>
        </div>
        <div className='landing-flex'>
          <RaisedButton label="Store Car" primary={true} style={{margin: 12}} onClick={() => window.location=`/storage/${this.state.carId}`}/>
        </div>
      </div>
      <NavBar selectedIndex={1} />
    </div>
  )
  }
}
