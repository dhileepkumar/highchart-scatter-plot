import React, { Component } from 'react';



class Button extends Component{
	render(){
		  if(this.props.click) {
				return <button type={this.props.buttondetails.type} className="btn btn-effect-ripple  btn-primary" disabled={this.props.disabled} onClick={this.props.click}> 
					{this.props.buttondetails.displaytext} 
				</button>
		  }
		  else{
			return <button type={this.props.buttondetails.type} className="btn btn-effect-ripple  btn-primary" disabled={this.props.disabled}> 
				{this.props.buttondetails.displaytext} 
			</button>
		  }
	}
}
export default Button;
