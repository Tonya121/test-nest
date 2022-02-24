import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import asyncReducers from './asyncReducers';

const rootReducer = combineReducers({
  form: formReducer,
  async: asyncReducers,
});

export default rootReducer;