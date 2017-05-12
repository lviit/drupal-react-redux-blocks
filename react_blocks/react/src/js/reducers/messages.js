function messages(state = [],  action) {
  switch (action.type) {
    case 'ADD_TO_LIST':
      // no mutation
      return [
        ...state,
        action.message
      ];
    case 'REMOVE_FROM_LIST':
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ];
    default:
      return state;
  }
  return state;
}

export default messages;
