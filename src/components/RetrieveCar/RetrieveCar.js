import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar2';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

// import navbar from '../Navbar/navbar';


export default class RetrieveCar extends Component {
  constructor(props){
    super(props);
    this.state={
      carId:""
    }
  }

  handleChange(event){
    this.setState({carId:event.target.value})
  }

  render() {
    return (
      <div id='landing-container'>
        <div id='landing-form'>
          <div className='landing-flex'>
            <h4>Retrieval</h4>
          </div>
          <div className='landing-flex'>
            <TextField id='ret-car-id' onChange={this.handleChange.bind(this)} hintText='Car ID #' value={this.state.carId}/>
          </div>
          <div className='landing-flex'>
            <RaisedButton label="Retrieve!" primary={true} style={{margin: 12}} onClick={() => window.location=`/retrieval/carinfo/${this.state.carId}`}/>
          </div>
        </div>
        <NavBar selectedIndex={0} />
      </div>
    );
  }
}
// export default class RetrieveCar extends Component {
//   render() {
//     return (
//       <div >
//         <div className='ret-car-container'>
//           <div className='ret-car-form'>
//             <TextField id='ret-car-id' hintText='Car ID #' />
//             <RaisedButton label="Retrieve!" primary={true} style={{margin: 12}} />
//           </div>
//         </div>
//         <NavBar selectedIndex={0} />
//       </div>
//     );
//   }
// }
