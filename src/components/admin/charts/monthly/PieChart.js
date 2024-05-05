import React, { Component } from "react";
import { connect } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const options = {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Satış Kategorisi (Son Ay)",
        },
      },
    };

    const data = {
      labels: ["Kadın Giyim", "Erkek giyim", "Takı", "Elektronik"],
      datasets: [
        {
          label: "# of Votes",
          data: [41, 19, 24, 16],
          backgroundColor: [
            "rgba(1, 255, 0, 0.5)",
            "rgba(255, 0, 0, 0.4)",
            "rgba(0, 0, 255, 0.4)",
            "rgba(255, 159, 64, 0.4)",
          ],
          borderColor: [
            "rgba(1, 255, 0, 1)",
            "rgba(255, 0, 0, 1)",
            "rgba(0, 0, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 0.5,
        },
      ],
    };

    return (
      <>
        <Pie
          data={data}
          width={250}
          height={300}
          style={{
            backgroundColor: "#ffff",
            borderRadius: "1vw",
            padding: "8px",
          }}
          options={options}
        />
      </>
    );
  }
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(PieChart);
