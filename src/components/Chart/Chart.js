import "./Chart.css";
import { ChartBar } from "./ChartBar";

export const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  console.log("dataPointsValues >>> ", dataPointsValues);
  const totalMaximum = Math.max(...dataPointsValues);
  console.log("totalMaximum >>> ", totalMaximum);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
};
