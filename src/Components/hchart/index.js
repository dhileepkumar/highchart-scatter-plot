import React, { Component } from 'react';
import Highcharts from 'highcharts';


class Chart extends Component {
  componentDidMount() {
    this.chart = new Highcharts[this.props.type || 'Chart'](
      this.chartEl,
      this.props.options
    );

    console.log(this.chart);
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return <div ref={el => (this.chartEl = el)} />;
  }
}


var circleX = 161.2;
var circleY = 51.6;
var circleR = 1.0;

class App extends Component {
  constructor(props){
    super(props);

  }
  componentDidMount(){
    this.height=0;
    this.width=0;
  
  }
  componentWillMount(){
    this.height = 700;
    this.width = 1280;
    
  }

 





  render() {
    const options = {

    chart: {
        type: 'scatter',
        plotBorderWidth: 1,
        zoomType: 'xy',
        width: this.width,
        height: this.height,
        events: {
                
            }
        
    },

    legend: {
        enabled: false
    },

    title: {
        text: 'Sugar and fat intake per country'
    },

    subtitle: {
        text: 'Source: <a href="http://www.euromonitor.com/">Euromonitor</a> and <a href="https://data.oecd.org/">OECD</a>'
    },

    xAxis: {
        gridLineWidth: 1,
        min: 0,
        title: {
            text: 'Daily fat intake'
        },
        labels: {
            format: '{value}',
            step: 1
        },
       
    },

    yAxis: {
        startOnTick: false,
        endOnTick: false,
        min: 0,
        title: {
            text: 'Daily sugar intake'
        },
        labels: {
            format: '{value}',
            step: 1
        },
        maxPadding: 0.2,
    },

    tooltip: {
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h3>{point.name}</h3></th></tr>' +
            '<tr><th>Group:</th><td>Group {point.group}</td></tr>' +
            '<tr><th>X:</th><td>{point.x}</td></tr>' +
            '<tr><th>Y:</th><td>{point.y}</td></tr>',
        footerFormat: '</table>',
        followPointer: true
    },

    credits: {
        enabled:false
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
 
    series: this.props.getuserdetails
    };

    return (
      <div className="App">
        <Chart options={options} />
      </div>
    );
  }
}

export default App;