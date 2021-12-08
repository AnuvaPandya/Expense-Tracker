import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {

  const dataPointValue = props.dataPoints.map((dataPoint) => dataPoint.value); //turn array to just array of numbers, therefore we'll have an array of 12 different value for each month
  const totalMaximum = Math.max(...dataPointValue); // Math.max wants list of arguments not array so we put ... to pull out all the values from array as stand alone arguments

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
