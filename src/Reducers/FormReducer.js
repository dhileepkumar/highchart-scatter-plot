import {REQUEST_FILE_UPLOAD, RECEIVE_FILE_UPLOAD} from '../Actions/Constants';
const initialState =  {
	filedata:'',
}

const FormReducer = (state = initialState,action) => {
	switch(action.type){
		
		case REQUEST_FILE_UPLOAD:
		return action.payload;
		
		case RECEIVE_FILE_UPLOAD:
		return action.payload;
		
		default:
		return state;
	}
}

export default FormReducer;