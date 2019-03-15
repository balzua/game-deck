import {API_BASE_URL, normalizeResponseErrors} from '../tools';

export const GAMES_REQUEST = 'GAMES_REQUEST';
export const gamesRequest = () => ({
  type: GAMES_REQUEST
});

export const GAMES_SUCCESS = 'GAMES_SUCCESS';
export const gamesSuccess = (games, sortMethod) => ({
  type: GAMES_SUCCESS,
  games,
  sortMethod
});

export const GAMES_FAILURE = 'GAMES_FAILURE';
export const gamesFailure = (error) => ({
  type: GAMES_FAILURE,
  error
});

export const fetchGames = user => (dispatch, getState) => {
  dispatch(gamesRequest());
  const authToken = getState().app.authentication.authToken;
  const sortMethod = getState().app.library.sortMethod;
  return fetch(`${API_BASE_URL}/library/${user}?content=games`, {
    method: 'GET',
      headers: {
          // Provide our existing token as credentials to get a new one
          Authorization: `Bearer ${authToken}`
      }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(games => {
    dispatch(gamesSuccess(games, sortMethod));
    dispatch(updateLibraryStats(getState().app.games));
  })
  .catch(err => {
    dispatch(gamesFailure(err));
  });
}

export const UPDATE_LIBRARY_STATS = 'UPDATE_LIBRARY_STATS';
export const updateLibraryStats = (games) => ({
  type: UPDATE_LIBRARY_STATS,
  games
});

export const STATS_REQUEST = 'STATS_REQUEST';
export const statsRequest = () => ({
  type: STATS_REQUEST
});

export const STATS_SUCCESS = 'STATS_SUCCESS';
export const statsSuccess = (stats) => ({
  type: STATS_SUCCESS,
  stats
});

export const STATS_FAILURE = 'STATS_FAILURE';
export const statsFailure = (error) => ({
  type: STATS_FAILURE,
  error
});

export const fetchStats = user => (dispatch, getState) => {
  dispatch(statsRequest());
  const authToken = getState().app.authentication.authToken;
  return fetch(`${API_BASE_URL}/library/${user}?content=stats`, {
    method: 'GET',
      headers: {
          // Provide our existing token as credentials to get a new one
          Authorization: `Bearer ${authToken}`
      }
  })
  .then(res => res.json())
  .then(res => {
    dispatch(statsSuccess(res));
  })
  .catch(err => {
    dispatch(statsFailure(err));
  });
};

export const addGames = guids => (dispatch, getState) => {
  const authToken = getState().app.authentication.authToken;
  const user = getState().app.authentication.user;
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
  .then(() => dispatch(fetchGames(user)))
  .catch(err => {
  });
};