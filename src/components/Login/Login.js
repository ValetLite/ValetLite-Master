import React from 'react';
import { connect } from 'react-redux';
import { login } from './LoginActionCreator';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export const Login = ({ login }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    login(evt.target.username.value, evt.target.password.value);
  };

  return (
    <div id="landing-container">
      <form id="landing-form" onSubmit={handleSubmit}>
        <div className='landing-flex'>
          <h4>Valet Login:</h4>
        </div>
        <div >
          <TextField hintText="Username" className='landing-input' />
          <TextField hintText="Password" className='landing-input'/>
        </div>
        <div className='landing-flex'>
          <RaisedButton label="Login" primary={true} style={{margin: 12}} />
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = { login };

export default connect(null, mapDispatchToProps)(Login);

          // <input type="submit" value="Login" />

  // <div class="landing-form">
  //   <input id="usrname" type="text" name="username" placeholder="Username">
  //   <input id="pword" type="password" name="password" placeholder="Password">
  // </div>