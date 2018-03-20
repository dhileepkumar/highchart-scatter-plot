const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const fileMinSize = 1 * 1000 * 1000; // 1MB
const fileMaxSize = 50 * 1000 * 1000; // 50MB
const AppValidation = {

	/* File Upload form validations */
	 ValidateUploadFrom(values){
	  const errors = {}
		  if (!values.fileupload) {
		    errors.fileupload = 'Required';
		  	} else {

		    let file = values.fileupload[0];

		    if (!file.name.endsWith('.stl') || !file.name.endsWith('.obj')) {
		      errors.file = 'Scan file must be an .STL or .OBJ file';
		    } else if (file.size < fileMinSize) {
		      errors.file = 'Scan file must be atleast 1MB';
		    } else if (file.size > fileMaxSize) {
		      errors.file = 'Scan file cannot exceed 50MB size';
		    }
		  }
		  return errors
	}
} 

export default AppValidation;