import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

import { test } from './test';
import { taskReducer } from './task';
import { dictionary } from './dictionary';
import { weather } from './weather';
export const history = createBrowserHistory();
export const appReducer = combineReducers({
  router: connectRouter(history),
  test,
  dictionary,
  task:taskReducer,
  weather,
})
