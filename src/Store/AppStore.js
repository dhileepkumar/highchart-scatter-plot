import { createStore, applyMiddleware} from 'redux';
import AppReducers from '../Reducers/AppReducers';
import thunk from 'redux-thunk';

const logger = (store) => (next) => (action) => {
	console.log('Action DIspatched :', action)
	return next(action);
}


const store = createStore(
	AppReducers,
	applyMiddleware(logger, thunk)
);

export default store;
	
