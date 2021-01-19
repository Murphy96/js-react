import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

import { appReducer, history } from './reducers';

export default function configureStore() {
  return createStore(
    appReducer,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
        thunk
      )
    )
  );
}
