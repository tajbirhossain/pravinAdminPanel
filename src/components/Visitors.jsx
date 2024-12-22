import React from "react";
import '../components/styles/dashboard.css'
import ReactApexChart from "react-apexcharts";

const Visitors = () => {


    const data = {
        series: [44, 55, 41],
        options: {
            chart: {
                type: 'donut',
            },
            fill: {
                colors: ['#1e88e5', '#00e396', '#feb019']
            },
            dataLabels: {
                enabled: false,
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }
    }

    return (
        <div className="visitors">
            <div className="news-text">
                <div className="news-left">
                    <h2>Our Visitors</h2>
                    <p>Different Devices Used to Visit</p>
                </div>
            </div>
            <ReactApexChart options={data.options} series={data.series} type="donut" />
            <div className="viewrs">
                <span className="firsts">Mobile</span>
                <span className="seconder">Desktop</span>
                <span className="thirder">Tablet</span>
            </div>
        </div>
    )
}

export default Visitors