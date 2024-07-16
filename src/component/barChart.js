import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsAccessibility from 'highcharts/modules/accessibility';
import highchartsExporting from 'highcharts/modules/exporting';

highchartsAccessibility(Highcharts);
highchartsExporting(Highcharts);

const BarChart = () => {
    const data = [100, 200, 300, 400, 500];
    const total = data.reduce((acc, val) => acc + val, 0);

    const options = {
        chart: {
            type: 'column',
        },
        title: {
            text: null,
        },
        xAxis: {
            categories: ['<b>Very Effective</b>', '<b>Effective</b>', '<b>Moderately effective</b>', '<b>Not very effective</b>', '<b>Not at all effective</b>'],
            tickLength: 0,
            lineColor: 'transparent',
            opposite: true,
            labels: {
                style: {
                    color: '#000',
                    fontSize: '12px',
                },
                useHTML: true,
            },
        },
        yAxis: {
            min: 0,
            title: {
                text: '',
            },
            gridLineWidth: 0,
            lineWidth: 0,
            labels: {
                enabled: false,
            },
            plotLines: [
                {
                    color: '#dddddd',
                    width: 1,
                    value: 0,
                    zIndex: 1
                },
                {
                    color: '#dddddd',
                    width: 1,
                    value: 100,
                    zIndex: 1
                },
                {
                    color: '#dddddd',
                    width: 1,
                    value: 200,
                    zIndex: 1
                },
                {
                    color: '#dddddd',
                    width: 1,
                    value: 300,
                    zIndex: 1
                },
                {
                    color: '#dddddd',
                    width: 1,
                    value: 400,
                    zIndex: 1
                },
                {
                    color: '#dddddd',
                    width: 1,
                    value: 500,
                    zIndex: 1
                }
            ]
        },
        series: [{
            name: 'opnion',
            data: data,
            color: '#00008B',
            zIndex: 10,
            showInLegend: false,
            states: {
                hover: {
                    enabled: false,
                },
                inactive: {
                    enabled: false,
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function () {
                    return `${((this.y / total) * 100).toFixed(1)}%`;
                },
                style: {
                    fontSize: '10px',
                    color: '#000'
                }
            }
        }],
        plotOptions: {
            column: {
                borderWidth: 0,
                borderRadius: 10,
            },
            series: {
                marker: {
                    enabled: false,
                },
                point: {
                    events: {
                        click: function () {
                            alert('Category: ' + this.category + ', Value: ' + this.y);
                        },
                    },
                },
            },
        },
        exporting: {
            enabled: false,
        },
        credits: {
            enabled: false,
        },
        accessibility: {
            enabled: true,
            keyboardNavigation: {
                enabled: true,
            },
        },
    };

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default BarChart;
