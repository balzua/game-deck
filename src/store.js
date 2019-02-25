import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer} from './reducers';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';

const fullReducer = combineReducers({
  form: formReducer,
  app: reducer
})

export default createStore(fullReducer, applyMiddleware(thunk));