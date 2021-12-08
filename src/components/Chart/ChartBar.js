import React from "react";
import "./ChartBar.css";
import Chart from "./Chart";
import { FormLabel } from "@mui/material";

const ChartBar = (props) => {
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill"></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
