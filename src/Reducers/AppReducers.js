import { combineReducers } from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import FormReducer from './FormReducer';
import ChartReducer from './ChartReducer';
import ErrorReducer from './ErrorReducer';

const rootReducer = combineReducers({
	form : reduxFormReducer,
	chart : ChartReducer,
	fileupload : FormReducer,
	errorslogs : ErrorReducer
})

export default rootReducer;