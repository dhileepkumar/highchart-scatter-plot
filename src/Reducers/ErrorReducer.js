import {API_SUCCESS, API_REQUEST, API_ERROR} from '../Actions/Constants';
const initialState =  {
	errors:false,
	errorsmessage:'',
}

const ErrorReducer = (state = initialState,action) => {
	switch(action.type){
		
		case API_SUCCESS:
		return action.payload;

		case API_REQUEST:
		return action.payload;

		case API_ERROR:
		return action.payload;
		
		default:
		return state;
	}
}

export default ErrorReducer;