import React, { Component } from 'react';
import Highcharts from 'highcharts';
import logo from './logo.svg';
import './App.css';
import Chart from './Components/chart';
import Hcharts from './Components/hchart';


const getuserdetails = [{
            data: [ 
            { x: 5, y: 3, name: 'Well A', group:1 },
            { x: 8, y: 9, name: 'Well B', group:1 },
            { x: 12, y: 4, name: 'Well C', group:1 },
            { x: 16, y: 7, name: 'Well D', group:1 },
            { x: 15, y: 11, name: 'Well E', group:1 },
            { x: 3, y: 7, name: 'Well F', group:1 }],
        },
        {
            data: [{x:6, y:6, group:1}],
            marker: {
                radius: 2*5*5,
                lineColor: 'green',
                fillColor: 'transparent',
                lineWidth: 1,
                symbol: 'circle'
            }
        },
         {
            data: [[16, 7]],
            marker: {
                radius: 3*2*37,
                lineColor: 'blue',
                fillColor: 'transparent',
                lineWidth: 1,
                symbol: 'circle'
            }
        }]





class App extends Component {
  
  render() {
    return <Hcharts getuserdetails={getuserdetails}/>
  }
}

export default App;
