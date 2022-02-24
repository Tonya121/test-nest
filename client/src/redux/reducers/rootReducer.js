import { combineReducers } from 'redux';
import asyncReducers from './asyncReducers';

const rootReducer = combineReducers({
  async: asyncReducers,
});

export default rootReducer;