import React, { Component } from 'react';
import {Route, Switch, HashRouter} from 'react-router-dom';
import ChartComponent from '../Chart'
import FileComponent from '../Form/FileUpload'
class RouterComponent extends Component{

	render(){
		console.log(this.props);
		return <HashRouter> 
				<Switch>
					<Route exact 
						path="/" 
						render = {(props)=>{
							return <ChartComponent 
								chartdata={this.props.chartdata}
								GetEntities={this.props.GetEntities}
								apperrors={this.props.apperrors}
							/> 
						}}
					/>
					
					<Route exact 
						path="/chart" 
						render = {(props)=>{
							return <ChartComponent 
								chartdata={this.props.chartdata}
								GetEntities={this.props.GetEntities}
								apperrors={this.props.apperrors}
							/> 
						}}
					/>
					
					<Route exact 
						path="/fileupload" 
						render = {(props)=>{
							return <FileComponent 
								fileupload={this.props.fileupload}
								apperrors={this.props.apperrors}
							/> 
						}}
					/>
					
					
				</Switch>
		</HashRouter>
	}
}
export default RouterComponent;
