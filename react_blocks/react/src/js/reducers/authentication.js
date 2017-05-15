function authentication(state = [],  action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        idToken: action.idToken,
      }
    case 'LOGOUT':
      return {}
    default:
      return state;
  }
  return state;
}

export default authentication;
