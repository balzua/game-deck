import {createStore, combineReducers} from 'redux';
import {reducer} from './reducers';
import {reducer as formReducer} from 'redux-form';

export default createStore(combineReducers({
  form: formReducer,
  app: reducer
}));