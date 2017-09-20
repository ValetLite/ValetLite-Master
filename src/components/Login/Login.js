import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { login } from './LoginActionCreator';

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
        <input className="landing-input" name="username" placeholder="username" />
        <input className="landing-input" name="password" type="password" placeholder="password" />
        <br/>
        <div className='landing-flex'>
          <RaisedButton label="Primary" primary={true} style={{margin: 12}} />
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = { login };

export default connect(null, mapDispatchToProps)(Login);


  // <div class="landing-form">
  //   <input id="usrname" type="text" name="username" placeholder="Username">
  //   <input id="pword" type="password" name="password" placeholder="Password">
  // </div>