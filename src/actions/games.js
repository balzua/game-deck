import {API_BASE_URL, normalizeResponseErrors} from '../tools';
import {updateLibraryStats, fetchStats} from './library';

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
export const deleteGame = id => (dispatch, getState) => {
  // First dispatch deleteGameRequest. This informs the user that deletion is in progress.
  dispatch(deleteGameRequest(id));
  const authToken = getState().app.authentication.authToken;
  // Next make the request to the server.
  return fetch(`${API_BASE_URL}/games/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${authToken}`
    } 
  })
  .then(res => normalizeResponseErrors(res))
  .then(() => {
    dispatch(deleteGameSuccess(id));
    dispatch(fetchStats(getState().app.authentication.user));
    dispatch(updateLibraryStats(getState().app.games));
  })
  .catch(err => {
    console.log(err);
    dispatch(deleteGameFailure(id, "An unknown error occured. Please try again later."));
  });
}

export const RATING_SUCCESS = 'RATING_SUCCESS';
export const ratingSuccess = (rating, id) => ({
  type: RATING_SUCCESS,
  rating,
  id
});

export const RATING_FAILURE = 'RATING_FAILURE';
export const ratingFailure = (id, error) => ({
  type: RATING_FAILURE,
  id,
  error
});

export const updateRating = (rating, id) => (dispatch, getState) => {
  const authToken = getState().app.authentication.authToken;
  const update = {
    userRating: rating,
    id
  };
  return fetch(`${API_BASE_URL}/games/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify(update)
  })
  .then(() => {
    dispatch(ratingSuccess(rating, id))
    dispatch(updateLibraryStats(getState().app.games));
    dispatch(fetchStats(getState().app.authentication.user));
  })
  .catch(err => {
    dispatch(ratingFailure(id, err))
  });
};

export const STATUS_SUCCESS = 'STATUS_SUCCESS';
export const statusSuccess = (status, id) => ({
  type: STATUS_SUCCESS,
  id,
  status
});

export const STATUS_FAILURE = 'STATUS_FAILURE';
export const statusFailure = (error) => ({
  type: STATUS_SUCCESS,
  error
});

export const updateStatus = (status, id) => (dispatch, getState) => {
  const authToken = getState().app.authentication.authToken;
  const update = {
    libraryStatus: status,
    id
  };
  return fetch(`${API_BASE_URL}/games/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify(update)
  })
  .then(() => {
    dispatch(statusSuccess(status, id));
    dispatch(updateLibraryStats(getState().app.games));
  })
  .catch(err => {
    dispatch(statusFailure(err));
  });
};