import {TOGGLE_MODAL, UPDATE_STATUS, FILTER_PLATFORM, UPDATE_RATING} from '../actions';
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

const initialState = {
  "games": [
    {
      "title": "Resident Evil 2",
      "id": 20,
      "description": "A remake of the 1998 survival horror classic, Resident Evil 2.",
      "releaseDate": "January 25, 2019",
      "rating": "M",
      "genres": ['Shooter', 'Action/Adventure'],
      "platforms": ['PC', 'XONE', 'PS4'],
      "image": "https://www.giantbomb.com/api/image/scale_small/3049558-box_re2.png",
      "userRating": 4,
      "status": "wishlist"
    },
    {
      "title": "Final Fantasy IX",
      "id": 300,
      "description": "Zidane Tribal and his troupe attempt to abduct Princess Garnet of Alexandria in this throwback to the classics of the series.",
      "releaseDate": "July 7, 2000",
      "rating": "T",
      "genres": ['Role-Playing', 'Card Game'],
      "platforms": ['PC', 'PS1', 'PS3', 'PS4', 'NS'],
      "image": "https://www.giantbomb.com/api/image/scale_small/1814634-box_ff9.png",
      "userRating": 5,
      "status": "playing"
    },
    {
      "title": "God of War",
      "id": 16,
      "description": "God of War is a soft reboot on the franchise of the same name. It sees Kratos and his son Atreus traverse a world of Norse myths.",
      "releaseDate": "April 20, 2018",
      "rating": "M",
      "genres": ['Action'],
      "platforms": ['PS4'],
      "image": "https://www.giantbomb.com/api/image/scale_small/3012241-god%20of%20war%20%28ps4%29.jpg",
      "userRating": 3,
      "status": "completed"
    }
  ],
  "library": {
    "libraryStats": {
      "favoriteGenre": "Role-Playing",
      "totalGames": 3,
      "totalCompleted": 1,
      "averageRating": 4
    },
    "chartScores": {
      "Action": 80,
      "Puzzle": 50,
      "Role-Playing": 95,
      "Fighting": 20,
      "Shooter": 73
    },
    "filters": ["XONE", "NS", "PS1"],
    "modalDisplay": false,
    "modalContent": "login",
    "platforms": ["XONE", "NS", "PS1", "GCN", "PS4"]
  },
  "authentication": {
    "loading": false,
    "error": null,
    "authToken": null,
    "user": null
  }
};

const games = (state = initialState.games, action) => {
  if (action.type === DELETE_GAME_REQUEST) {
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
  else if (action.type === UPDATE_STATUS) {
    return state.map(game => {
      if (game.id !== action.id) {
        return {...game};
      } else {
        return {...game, status: action.status};
      }
    })
  } 
  else if (action.type === UPDATE_RATING) {
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
  if (action.type === FILTER_PLATFORM) {
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
      user: action.currentUser.user
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
      authToken: action.authToken
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




/* export const reducer = (state = initialState, action) => {
  
  
  
}; */