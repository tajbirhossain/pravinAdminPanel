import React from "react";
import '../components/styles/dashboard.css'
import ReactApexChart from "react-apexcharts";

const Newsletter = () => {

    const data = {
        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
        }],
        options: {
            chart: {
                height: 350,
                type: 'area',
                toolbar: {
                    show: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'number',
                categories: ["1", "2", "3", "4", "5", "6", "7", "8"]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        }
    }


    return (
        <div className="newsletter">
            <div className="news-text">
                <div className="news-left">
                    <h2>Newsletter Campaign</h2>
                    <p>Overview of Newsletter Campaign</p>
                </div>
                <div className="news-right">
                    <span className="ample">Open Rate</span>
                    <span className="pixels">Recurring Payments</span>
                </div>
            </div>
            <ReactApexChart options={data.options} series={data.series} type="area" height={350} />
            <div className="total-wrap">
                <div className="single-total">
                    <h2>5098</h2>
                    <span>Total Sent</span>
                </div>
                <div className="single-total">
                    <h2>4156</h2>
                    <span>Mail Open Rate</span>
                </div>
                <div className="single-total">
                    <h2>1369</h2>
                    <span>Click Rate</span>
                </div>
            </div>
        </div>
    )
}

export default Newsletter