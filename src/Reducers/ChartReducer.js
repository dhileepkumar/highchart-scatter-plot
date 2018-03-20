import {REQUEST_GRAPH, RECEIVE_GRAPH} from '../Actions/Constants';
const initialState =  {
	chartdata:'',
}

const ChartReducer = (state = initialState,action) => {
	switch(action.type){
		
		case REQUEST_GRAPH:
		return state;
		
		case RECEIVE_GRAPH:
		return action.payload;
		
		default:
		return state;
	}
}

export default ChartReducer;