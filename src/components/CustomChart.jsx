import { height } from "@mui/system";
import React from "react";
import { Chart } from "react-google-charts";

export const defaultOptions = {
  title: "",
  chartArea: { width: "100%", height: "100%" },
  backgroundColor: "white",
  vAxis: {
    gridlines: {
      color: "transparent"
    }
  },
  opacity: 0
};

const CustomChart = ({ data, options, height = "130px" }) => {
  return (
    <>
      <div classname='chart-wraper'>
        <Chart
          chartType='AreaChart'
          width='100%'
          height={height}
          data={data}
          options={options ? options : defaultOptions}
        />
      </div>
    </>
  );
};

export default CustomChart;
