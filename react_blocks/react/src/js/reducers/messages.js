function messages(state = [],  action) {
  switch (action.type) {
    case 'ADD_TO_LIST':
      // no mutation
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
  return state;
}

export default messages;
