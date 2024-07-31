import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const UniversitySurveyChart = () => {
    const options = {
        chart: {
            type: 'pie',
        },
        title: {
            text: 'University Survey Data',
            align: 'center',
        },
        subtitle: {
            text: 'University test data',
            align: 'center',
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
        },
        accessibility: {
            point: {
                valueSuffix: '%',
            },
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                borderWidth: 2,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b><br>{point.percentage}%',
                    distance: 20,
                },
            },
        },
        exporting: {
            enabled: false,
        },
        credits: {
            enabled: false,
        },
        series: [
            {
                colorByPoint: true,
                data: [
                    {
                        name: 'Academic Quality',
                        y: 30.3,
                    },
                    {
                        name: 'Campus Facilities',
                        y: 20.7,
                    },
                    {
                        name: 'Student Life',
                        y: 25.2,
                    },
                    {
                        name: 'Faculty',
                        y: 23.8,
                    },
                ],
            },
        ],
    };

    return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default UniversitySurveyChart;
