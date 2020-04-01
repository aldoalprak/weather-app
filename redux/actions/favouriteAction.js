export const addFavourite = (city) => {
  return {
    type: 'ADD_FAVOURITE',
    payload: city
  }
}

export const deleteFavourite = (city) => {
  return {
    type: 'DELETE_FAVOURITE',
    payload: city
  }
}