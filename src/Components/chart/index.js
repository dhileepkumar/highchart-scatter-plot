import React, { Component } from 'react';
import Highcharts from 'highcharts';
import GraphDataConfig from './Config';
import Loader from '../Loader';

class Chart extends Component {

    componentDidMount() {

    }

    componentDidUpdate(nextProps, nextState) {
        this.chart = new Highcharts[nextProps.props || 'Chart'](
            this.chartEl,
            nextProps.options
        );

        if (this.circle) {
            (this.circle.element).remove();
        }

        if(this.chart.series[0])
        {
          this.chart.series[0].setData(nextProps.wells);
          nextProps.groups.map((list_group, index) => {
              if (index) {
                  var pixelX = this.chart.xAxis[0].toPixels(list_group.x);
                  var pixelY = this.chart.yAxis[0].toPixels(list_group.y);
                  var pixelR = this.chart.xAxis[0].toPixels(list_group.r) - this.chart.xAxis[0].toPixels(0);
                  this.circle = this.chart.renderer.circle(pixelX, pixelY, pixelR).attr({
                      radius: 1,
                      type: 'spline',
                      fill: 'transparent',
                      stroke: 'green',
                      'stroke-width': 1
                  });
                  this.circle.add();
              }
          })
          this.chart.redraw()
        }
    }

    componentWillUnmount() {
        if(this.chart){
          this.chart.destroy();
        }
    }

    render() {
        return <div ref = { el => (this.chartEl = el) } />;
    }
}

var getgroups = [];
var getwell = [];
class App extends Component {


    componentDidMount() {
        this.height = 0;
        this.width = 0;
        this.graphdata = this.props.chartdata;
        this.apperrors = this.props.apperrors.errors;
    }

    componentWillMount() {
        this.height = window.outerWidth;
        this.width = window.outerWidth;
        this.graphdata = this.props.chartdata
        this.props.GetEntities();
        this.apperrors = this.props.apperrors.errors;
    }

    componentWillUpdate(nextProps, nextState) {

        this.height = window.outerWidth;
        this.width = window.outerWidth;
        this.apperrors = nextProps.apperrors.errors;
        console.log(nextProps);
        if (nextProps.chartdata.entities) {
            if (getwell && getgroups) {
                nextProps.chartdata.entities.wells.map((_list_wells) => {
                    getwell.push({
                        x: _list_wells.top_Hole_X,
                        y: _list_wells.top_Hole_Y,
                        b_x: _list_wells.bottom_Hole_X,
                        b_y: _list_wells.bottom_Hole_Y,
                        name: _list_wells.name,
                        group: _list_wells.groupId,
                        well: _list_wells.wellId,
                    })
                })
                nextProps.chartdata.entities.groups.map((_list_group) => {
                    getgroups.push({
                        x: _list_group.location_X,
                        y: _list_group.location_Y,
                        r: _list_group.radius,
                        type: _list_group.type,
                        wells: _list_group.wells,
                    })
                })
            }
        }
    }

    render() {
        if(this.apperrors)
        {
          return <Loader errors={this.props.apperrors.errorsmessage}/>
        }
        return <div className="App"> <Chart options = {GraphDataConfig} groups = {getgroups} wells = {getwell}/> </div>
    }
}

export default App;