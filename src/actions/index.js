export const DELETE_GAME_REQUEST = 'DELETE_GAME_REQUEST';
export const deleteGameRequest = id => ({
  type: DELETE_GAME_REQUEST,
  id
});

export const DELETE_GAME_SUCCESS = 'DELETE_GAME_SUCCESS';
export const deleteGameSuccess = id => ({
  type: DELETE_GAME_SUCCESS,
  id
});

export const DELETE_GAME_FAILURE = 'DELETE_GAME_FAILURE';
export const deleteGameFailure = (id, error) => ({
  type: DELETE_GAME_FAILURE,
  id,
  error
});

// Thunk for deleting games.
export const deleteGame = id => {
  return (dispatch) => {
    // First dispatch deleteGameRequest. This informs the user that deletion is in progress.
    dispatch(deleteGameRequest(id));
    // Next make the request to the server.
    return fetch(`http://localhost:8080/games/${id}`, {
      method: "DELETE",
      headers: {
        
      } 
    })
    .then(response => {
      if (response.ok) {
        dispatch(deleteGameSuccess(id));
      }
    }, error => {
      console.log(error)
      dispatch(deleteGameFailure(id, error));
    });
  }
}

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const toggleModal = (content = '') => ({
  type: TOGGLE_MODAL,
  content
})

export const UPDATE_STATUS = 'UPDATE_STATUS';
export const updateStatus = (status, id) => ({
  type: UPDATE_STATUS,
  id,
  status
});

export const FILTER_PLATFORM = 'FILTER_PLATFORM';
export const filterPlatform = platform => ({
  type: FILTER_PLATFORM,
  platform
});

export const UPDATE_RATING = 'UPDATE_RATING';
export const updateRating = (rating, id) => ({
  type: UPDATE_RATING,
  rating,
  id
});