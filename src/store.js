import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer} from './reducers';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {setAuthToken, refreshAuthToken} from './actions';
import {loadAuthToken, loadUser} from './local-storage';

const fullReducer = combineReducers({
  form: formReducer,
  app: reducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(fullReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
));

//const store = createStore(fullReducer, applyMiddleware(thunk));

const authToken = loadAuthToken();
const user = loadUser();
if (authToken && user) {
    const token = authToken;
    store.dispatch(setAuthToken(token, user));
    store.dispatch(refreshAuthToken());
}

export default store; 