import {API_BASE_URL, normalizeResponseErrors} from '../tools';
import {saveAuthToken, clearAuthToken} from '../local-storage';
import {SubmissionError} from 'redux-form';
import jwtDecode from 'jwt-decode';


export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = (authToken, user) => ({
    type: SET_AUTH_TOKEN,
    authToken,
    currentUser: user
});

export const CLEAR_AUTH_TOKEN = 'CLEAR_AUTH_TOKEN';
export const clearAuth = () => ({
  type: CLEAR_AUTH_TOKEN
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


// *************** THUNKS *********************

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

export const logout = () => (dispatch) => {
  dispatch(clearAuth());
  clearAuthToken();
}

const storeAuthInfo = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  dispatch(setAuthToken(authToken, decodedToken.user.username));
  dispatch(authSuccess(decodedToken.user.username));
  saveAuthToken(authToken, decodedToken.user.username);
};


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