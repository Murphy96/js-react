import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

import { test} from './test';

export const history = createBrowserHistory();

export const appReducer = combineReducers({
  router: connectRouter(history),
  test
})