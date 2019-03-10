import {API_BASE_URL, normalizeResponseErrors} from '../tools';
import {saveAuthToken, clearAuthToken} from '../local-storage';
import {SubmissionError} from 'redux-form';
import jwtDecode from 'jwt-decode';

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

export const registerUser = user => dispatch => {
  return fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(user)
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .catch(err => {
    const {reason, message, location} = err;
    if (reason === 'ValidationError') {
        // Convert ValidationErrors into SubmissionErrors for Redux Form
        return Promise.reject(
            new SubmissionError({
                [location]: message
            })
        );
    }
  });
};

export const login = user => dispatch => {
  //Dispatch action to indicate that loading is in progress.
  dispatch(authRequest());
  return fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  // Reject any requests which don't return a 200 status, creating
  // errors which follow a consistent format
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(({authToken}) => storeAuthInfo(authToken, dispatch))
  .catch(err => {
    const {code} = err;
    const message =
        code === 401
            ? 'Incorrect username or password'
            : 'Unable to login, please try again';
    dispatch(authFailure(message));
    // Could not authenticate, so return a SubmissionError for Redux
    // Form
    return Promise.reject(
        new SubmissionError({
            _error: message
        })
    ); 
  })
};

const storeAuthInfo = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  dispatch(setAuthToken(authToken, decodedToken.user.username));
  dispatch(authSuccess(decodedToken.user.username));
  saveAuthToken(authToken, decodedToken.user.username);
};


export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = (authToken, user) => ({
    type: SET_AUTH_TOKEN,
    authToken,
    currentUser: user
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
    type: AUTH_SUCCESS,
    currentUser
});

export const AUTH_FAILURE = 'AUTH_FAILURE';
export const authFailure = message => ({
    type: AUTH_FAILURE,
    message
});

export const CLEAR_AUTH_TOKEN = 'CLEAR_AUTH_TOKEN';
export const clearAuth = () => ({
  type: CLEAR_AUTH_TOKEN
});

export const logout = () => (dispatch) => {
  dispatch(clearAuth());
  clearAuthToken();
}

export const refreshAuthToken = () => (dispatch, getState) => {
    dispatch(authRequest());
    const authToken = getState().app.authentication.authToken;
    return fetch(`${API_BASE_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
            // Provide our existing token as credentials to get a new one
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({authToken}) => storeAuthInfo(authToken, dispatch))
        .catch(err => {
            // We couldn't get a refresh token because our current credentials
            // are invalid or expired, or something else went wrong, so clear
            // them and sign us out
            dispatch(authFailure(err));
            dispatch(clearAuth());
            clearAuthToken(authToken);
        });
};

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
  .then(response => {
    if (response.ok) {
      dispatch(deleteGameSuccess(id));
    }
  }, error => {
    console.log(error)
    dispatch(deleteGameFailure(id, error));
  });
}

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const toggleModal = (content = '') => ({
  type: TOGGLE_MODAL,
  content
})

export const STATUS_SUCCESS = 'STATUS_SUCCESS';
export const statusSuccess = (status, id) => ({
  type: STATUS_SUCCESS,
  id,
  status
});

export const updateStatus = (status, id) => (dispatch, getState) => {
  console.log('updateStatus');
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
  .then(dispatch(statusSuccess(status, id)))
  .then(dispatch(updateLibraryStats(getState().app.games)))
  .catch(err => {
    dispatch(ratingFailure(id, err))
  });
};

export const FILTER_PLATFORM = 'FILTER_PLATFORM';
export const filterPlatform = platform => ({
  type: FILTER_PLATFORM,
  platform
});

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
  .then(dispatch(ratingSuccess(rating, id)))
  .then(dispatch(updateLibraryStats(getState().app.games)))
  .catch(err => {
    dispatch(ratingFailure(id, err))
  });
};

export const LIBRARY_REQUEST = 'LIBRARY_REQUEST';
export const libraryRequest = () => ({
  type: LIBRARY_REQUEST
});

export const LIBRARY_SUCCESS = 'LIBRARY_SUCCESS';
export const librarySuccess = (library) => ({
  type: LIBRARY_SUCCESS,
  library
});

export const LIBRARY_FAILURE = 'LIBRARY_FAILURE';
export const libraryFailure = (error) => ({
  type: LIBRARY_FAILURE,
  error
});

export const UPDATE_LIBRARY_STATS = 'UPDATE_LIBRARY_STATS';
export const updateLibraryStats = (games) => ({
  type: UPDATE_LIBRARY_STATS,
  games
});

export const fetchLibrary = user => (dispatch, getState) => {
  //Update the state to display indicator that the library is loading.
  dispatch(libraryRequest());
  //Perform the API call to get the library of the user
  const authToken = getState().app.authentication.authToken;
  return fetch(`${API_BASE_URL}/library/${user}`, {
    method: 'GET',
      headers: {
          // Provide our existing token as credentials to get a new one
          Authorization: `Bearer ${authToken}`
      }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(library => {
    dispatch(updateLibraryStats(library.games));
    dispatch(librarySuccess(library));
  })
};

export const addGames = guids => (dispatch, getState) => {
  const authToken = getState().app.authentication.authToken;
  console.log(guids);
  return fetch(`${API_BASE_URL}/games`, {
    method: 'POST',
      headers: {
          // Provide our existing token as credentials to get a new one
        Authorization: `Bearer ${authToken}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(guids)
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => console.log(res))
  .catch(err => {
  });
};