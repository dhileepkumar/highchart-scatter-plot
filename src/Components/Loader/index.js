import React, {Component} from 'react';
import './loader.css'
class Loader extends Component {
  
  componentDidMount(){
  	this.errormessgae=this.props.errors;
  	console.log(this.props.errors)
  }

  componentDidUpdate(nextProps, nextState){
  	this.errormessgae=nextProps.errors;
  }

  componentWillUpdate(nextProps, nextState){
  	this.errormessgae=nextProps.errors;
  }

  render() {
      return <div className="loaderholder">
      			<div className="react-loader">
      				<div className="loader"></div>
      				<div className="loadermessage">{this.errormessgae}</div>
      			</div>
      		</div>
  }
}

export default Loader