// add message to list
export function addToList(message) {
  return {
    type: 'ADD_TO_LIST',
    message
  }
}

export function removeFromList(i) {
  return {
    type: 'REMOVE_FROM_LIST',
    i
  }
}

export function login(idToken) {
  return {
    type: 'LOGIN',
    idToken
  }
}

export function logout() {
  return {
    type: 'LOGOUT',
  }
}
