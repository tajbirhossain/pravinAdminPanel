import React from "react";
import '../components/styles/dashboard.css'
import ReactApexChart from "react-apexcharts";

const Overview = () => {

    const data = {
        series: [{
            name: 'Ample',
            data: [44, 55, 57, 56, 61, 58, 63]
        }, {
            name: 'Pixel',
            data: [76, 85, 101, 98, 87, 105, 91]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '30%',
                    endingShape: 'rounded',
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 5,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            },
            fill: {
                opacity: 1,
                colors: ['#21c1d6', '#1e88e5']
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands"
                    }
                }
            }
        }
    }



    return (
        <div className="overview">
            <div className="news-text">
                <div className="news-left">
                    <h2>Sales Overview</h2>
                    <p>Ample Admin Vs Pixel Admin</p>
                </div>
                <div className="news-right">
                    <span className="ample">Ample</span>
                    <span className="pixels">Pixel</span>
                </div>
            </div>
            <ReactApexChart options={data.options} series={data.series} type="bar" height={350} />
        </div>
    )
}

export default Overview