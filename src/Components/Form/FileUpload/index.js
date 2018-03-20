import React from 'react'
import Loader from '../../Loader';

export default class SimpleReactFileUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state ={ file:null }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

    componentDidMount() {
        this.apperrors = this.props.apperrors.errors;
    }

    componentWillMount() {
        this.apperrors = this.props.apperrors.errors;
    }

    componentWillUpdate(nextProps, nextState) {
        this.apperrors = nextProps.apperrors.errors;
    }

  onFormSubmit(e){
    e.preventDefault();
    if(this.state.file)
    {
      this.props.fileupload(this.state.file)
      console.log(e.target.value)
      e.target.value = null;
    }
  }

  onChange(e) {
    this.setState({file:e.target.files[0]})
  }

  render() {
    if(this.apperrors)
    {
      return <Loader errors={this.props.apperrors.errorsmessage}/>
    }
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" name="fileupload" id="fileupload" onChange={this.onChange} />
        <button type="submit">Upload</button>
      </form>
   )
  }
}