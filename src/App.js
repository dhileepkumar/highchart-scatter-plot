import React, { Component } from 'react';
import {connect, Provider} from 'react-redux';
import RouterComponent from './Components/Router/Router';
import AppStore from './Store/AppStore';
import ActionCreators from './Actions/ActionCreators';


const mapStateToProps = (state) => ({
  chartdata:state.chart.chartdata,
  filedata:state.fileupload.filedata,
  uploadedhistory:'',
  apperrors: state.errorslogs
})

const mapDispatchToProps = (dispatch) => ({
  fileupload: (values) => dispatch(ActionCreators.UploadFile(values)),
  GetEntities : () =>  dispatch(ActionCreators.GetEntities()),
})


const MainComponent = connect(mapStateToProps, mapDispatchToProps)(RouterComponent);

class App extends Component {
  render() {
    return <Provider store={AppStore}><MainComponent/></Provider>
  }
}

export default App;
