import Auth0Lock from 'auth0-lock';
import store from './store';
import { login, logout } from '../actions/actionCreators';

export default class AuthService {
  constructor(clientId, domain) {
    // Configure Auth0
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        responseType: 'token'
      }
    })
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', this._doAuthentication.bind(this))
    // binds login functions to keep this context
    this.login = this.login.bind(this)
  }

  _doAuthentication(authResult) {
    // Saves the user token
    this.setToken(authResult.idToken)
  }

  login() {
    // Call the show method to display the widget.
    this.lock.show()
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    return !!this.getToken()
  }

  setToken(idToken) {
    // dispatch login to redux
    store.dispatch(login(idToken));
  }

  getToken() {
    // Retrieves the user token from store
    const state = store.getState();
    return state.authentication.idToken;
  }

  logout() {
    // dispatch logout to redux
    store.dispatch(logout());
  }
}
