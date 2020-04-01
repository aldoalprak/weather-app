import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer';
import reduxThunk from 'redux-thunk';

const composeEnhancers = compose;
const middleware = applyMiddleware(reduxThunk);

const store = createStore(rootReducer, composeEnhancers(middleware));

export default store;