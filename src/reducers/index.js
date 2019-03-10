import {TOGGLE_MODAL, STATUS_SUCCESS, FILTER_PLATFORM, RATING_SUCCESS} from '../actions';
import {combineReducers} from 'redux';
import {
  DELETE_GAME_REQUEST,
  DELETE_GAME_SUCCESS,
  DELETE_GAME_FAILURE
} from '../actions';

import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  CLEAR_AUTH_TOKEN,
  SET_AUTH_TOKEN
} from '../actions';

import {
  LIBRARY_SUCCESS,
  UPDATE_LIBRARY_STATS
} from '../actions';

const initialState = {
  "games": [],
  "library": {
    "libraryStats": {
    },
    "chartScores": {
      "Action": 80,
      "Puzzle": 50,
      "Role-Playing": 95,
      "Fighting": 20,
      "Shooter": 73
    },
    "filters": [],
    "modalDisplay": false,
    "modalContent": "login",
    "platforms": []
  },
  "authentication": {
    "loading": false,
    "error": null,
    "authToken": null,
    "user": null
  }
};

const games = (state = initialState.games, action) => {
  if (action.type === LIBRARY_SUCCESS) {
    return Object.assign([], state, action.library.games);
  }
  else if (action.type === DELETE_GAME_REQUEST) {
    return state.map(game => {
      if (game.id !== action.id) {
        return {...game}
      } else {
        return {...game, deleteRequest: true}
      }
    });
  }
  else if (action.type === DELETE_GAME_SUCCESS) {
    return state.filter(game => game.id !== action.id)
  } 
  else if (action.type === DELETE_GAME_FAILURE) {
    return state.map(game => {
      if (game.id !== action.id) {
        return {...game}
      } else {
        return {...game, error: action.error}
      }
    });
  }
  else if (action.type === STATUS_SUCCESS) {
    return state.map(game => {
      if (game.id !== action.id) {
        return {...game};
      } else {
        return {...game, status: action.status};
      }
    })
  } 
  else if (action.type === RATING_SUCCESS) {
    return state.map(game => {
      if (game.id !== action.id) {
        return {...game};
      } else {
        return {...game, userRating: action.rating};
      }
    })
  }
  else {
    return state;
  }
}

const library = (state = initialState.library, action) => {
  if (action.type === LIBRARY_SUCCESS) {
    return Object.assign({}, state, {
      "chartScores": action.library.chartScores,
      "platforms": action.library.platforms
    });
  }
  else if (action.type === UPDATE_LIBRARY_STATS) {
    const completedGames = action.games.filter(game => game.libraryStatus === "completed");
    const totalStars = action.games.reduce((acc, cur) => acc + cur.userRating, 0);
    const ratedGames = action.games.filter(game => game.userRating > 0).length;
    return Object.assign({}, state, {
        "libraryStats": {
        "totalGames": action.games.length,
        "totalCompleted": completedGames.length,
        "averageRating": Math.round((totalStars / ratedGames) * 100) / 100
      }
    });
  }
  else if (action.type === FILTER_PLATFORM) {
    //First, find the position of the filter in the filters array. Will be -1 if not present.
    const filterLocation = state.filters.findIndex(filter => filter === action.platform);
    //If the item is already in the filters, remove it.
    if (filterLocation >= 0) {
      return Object.assign({}, state, {
        filters: [...state.filters.slice(0, filterLocation), ...state.filters.slice(filterLocation + 1)]
      });
    } 
    //If the item is not in the filters, add it.
    else {
      return Object.assign({}, state, {
        filters: [...state.filters, action.platform]
      });
    }
  } 
  else if (action.type === TOGGLE_MODAL) {
    return Object.assign({}, state, {
      modalDisplay: !state.modalDisplay,
      modalContent: action.content
    })
  }
  else {
    return state;
  }
}

const authentication = (state = initialState.authentication, action) => {
  if (action.type === AUTH_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  }
  else if (action.type === AUTH_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      user: action.currentUser
    });
  }
  else if (action.type === AUTH_FAILURE) {
    return Object.assign({}, state, {
      loading: false,
      error: action.message
    });
  }
  else if (action.type === SET_AUTH_TOKEN) {
    return Object.assign({}, state, {
      authToken: action.authToken,
      user: action.currentUser
    });
  }
  else if (action.type === CLEAR_AUTH_TOKEN) {
    return Object.assign({}, state, {
      authToken: null,
      user: null
    });
  }
  else {
    return state;
  }
};

export const reducer = combineReducers({
  games,
  library,
  authentication
})