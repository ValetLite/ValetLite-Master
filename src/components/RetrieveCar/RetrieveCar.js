import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar2';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

// import navbar from '../Navbar/navbar';

export default class RetrieveCar extends Component {
  render() {
    return (
      <div id='landing-container'>
        <div id='landing-form'>
          <div className='landing-flex'>
            <h4>Retrieval</h4>
          </div>
          <div className='landing-flex'>
            <TextField id='ret-car-id' hintText='Car ID #' />
          </div>
          <div className='landing-flex'>
            <RaisedButton label="Retrieve!" primary={true} style={{margin: 12}} />
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
