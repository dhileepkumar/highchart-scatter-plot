import 'whatwg-fetch';
var EnersightApis ={
	UploadFile(values){
		console.log(values);
		return fetch('http://172.16.20.32:8080/api/UploadEntites/Upload',{
			method: 'POST',
			headers: { 'content-type': 'multipart/form-data'},
			body: values
		})
		.then((response)=>response.json())
	},
	GetEntities(){
		return fetch('http://172.16.20.32:8080/api/UploadEntites/GetEntities')
		.then((response)=>response.json())
	}
}

export default EnersightApis

