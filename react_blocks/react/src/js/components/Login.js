import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispachToProps } from '../utils/MapToProps';
import AuthService from '../utils/AuthService';

class Login extends React.Component {
  constructor() {
    super();

    // settings from drupal
    if (typeof drupalSettings !== 'undefined') {
      const { auth0_domain, auth0_client_id }  = drupalSettings.react_blocks;
      this.auth = new AuthService(auth0_client_id, auth0_domain);
    }

    // for webpack-dev-server
    //const auth0_domain = 'http://www.example.com';
    //const auth0_client_id = '123456789';
    // this.auth = new AuthService(auth0_client_id, auth0_domain);

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
