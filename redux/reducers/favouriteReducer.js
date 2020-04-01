const initialState = {
  data:[]
}
const favouriteReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_FAVOURITE':
      return {...state, data:[...state.data, action.payload]};
    case 'DELETE_FAVOURITE':
      const deletedIndex = state.data.indexOf(action.payload);
      state.data.splice(deletedIndex, 1);
      return {...state, data:[...state.data]}

  }
  return {...state}
}

export default favouriteReducer;