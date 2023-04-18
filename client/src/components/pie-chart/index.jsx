import React from "react";
import ReactApexChart from "react-apexcharts";
import "./index.scss";

class ApexCharts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 41],
      options: {
        chart: {
          width: 380,
          type: "donut",
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270,
          },
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: "gradient",
        },
        legend: {
          formatter: function (val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex];
          },
        },
        title: {
          text: "",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <h2>PORT BAKU RESIDENCE</h2>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width={380}
        />
        <ul>
          <li>
            <p>64%</p>
            <p>Tamamlanmış</p>
          </li>
          <li>
            <p>26%</p>
            <p>Davam edən</p>
          </li>
          <li>
            <p>10%</p>
            <p>Gecikdirilən</p>
          </li>
        </ul>
      </div>
    );
  }
}

const domContainer = document.querySelector("#app");

export default ApexCharts;
