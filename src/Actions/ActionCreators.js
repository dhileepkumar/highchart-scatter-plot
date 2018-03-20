import {REQUEST_FILE_UPLOAD, RECEIVE_FILE_UPLOAD, REQUEST_GRAPH, RECEIVE_GRAPH, API_ERROR, API_REQUEST,API_SUCCESS  } from './Constants';
import Apis from '../Apis';

const ActionCreators = {
		UploadFile(values){
			return (dispatch) => {
				dispatch({ type: REQUEST_FILE_UPLOAD, payload:values});
				dispatch({ type:API_REQUEST, payload:{ errors:false, errorsmessage:''}})
				Apis.UploadFile(values).then(
					(result) => { 
									dispatch({ type:RECEIVE_FILE_UPLOAD,  payload:{ email:result.email},success:true})
									dispatch({ type:API_SUCCESS, payload:{ errors:false, errorsmessage:''}})
								},
					(error) => dispatch({ type:API_ERROR,  payload:{ errors:true, errorsmessage:error.message}, success:false})
				)
				.catch((error)=>{
					console.log(error)
						dispatch({ type:API_ERROR,  payload:{ errors:true, errorsmessage:error.message}, success:false})
				})
			}
		},
		GetEntities(){
			return (dispatch) => {
				dispatch({ type: REQUEST_GRAPH});
				dispatch({ type:API_REQUEST, payload:{ errors:true, errorsmessage:''}})
				Apis.GetEntities().then(
					(result) => {
									dispatch({ type:RECEIVE_GRAPH,  payload:{chartdata:result},success:true}),
									dispatch({ type:API_SUCCESS, payload:{ errors:false, errorsmessage:''}})

								},
					(error) => dispatch({ type:API_ERROR, payload:{ errors:true, errorsmessage:error.message}, success:false})
				)
				.catch((error)=>{
						dispatch({ type:API_ERROR,  payload:{ errors:true, errorsmessage:error.message},success:true})
				})
			}
		}
	}

export default ActionCreators;
