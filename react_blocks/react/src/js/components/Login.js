import React, { PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispachToProps } from '../utils/MapToProps';
import AuthService from '../utils/AuthService';

class Login extends React.Component {
  constructor() {
    super();
    this.auth = new AuthService('DXkjY-alqzsYhvFSFOITWeVzfL700wOU', 'lviit.eu.auth0.com');
  }
  render() {
    return (
      <div>
        <h2>Login</h2>
        { this.props.authentication.idToken ?
          <button onClick={(e) => this.auth.logout()}>Logout</button> :
          <button onClick={(e) => this.auth.login()}>Login</button>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispachToProps)(Login);
