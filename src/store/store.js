import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {createBrowserHistory} from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import thunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
// import rootSaga from '../redux/sagas';

const history = createBrowserHistory();
// const sagaMiddleware = createSagaMiddleware();
// const middlewares = [thunk, sagaMiddleware, routeMiddleware];
const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, routeMiddleware];

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(createReducer(), enhancer);

// WithReducer
store.asyncReducers = {};
export const injectReducer = (key, reducer) => {
	if (store.asyncReducers[key]) {
		return false;
	}
	store.asyncReducers[key] = reducer;
	store.replaceReducer(createReducer(store.asyncReducers));
	return store;
};

// sagaMiddleware.run(rootSaga);
export { store, history };
