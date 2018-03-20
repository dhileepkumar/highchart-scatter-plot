const GraphDataConfig = {
            chart: {
                type: 'scatter',
                plotBorderWidth: 1,
                zoomType: false,
                width: this.width,
                height: this.height,
                events: {}
            },
            legend: {
                enabled: false
            },
            title: {
                text: '3esi Enersight Graph'
            },
            subtitle: {
                text: 'Wells and Group'
            },
            xAxis: {
                gridLineWidth: 1,
                min: 0,
                max: 20,
                title: {
                    text: 'xAxis'
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
                max: 20,
                title: {
                    text: 'yAxis'
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
                enabled: false
            },

            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    },
                    animation: {
                        duration: 2000,
                        easing: 'easeOutBounce'
                    }
                }
            },

            series: this.graphdata
        };
export default GraphDataConfig;