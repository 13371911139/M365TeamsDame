  
import { createStore, applyMiddleware, Middleware, compose, Action } from 'redux';
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer, { IStoreState } from './reducer';

let middleware: Middleware[] = [thunkMiddleware];

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV !== 'production') {
  const loggerMiddleware = createLogger({
    collapsed: true,
  });
  middleware = [...middleware, loggerMiddleware];
}

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

export type DispatchFunction = ThunkDispatch<IStoreState, null, Action>;
export default store;
export type { IStoreState };