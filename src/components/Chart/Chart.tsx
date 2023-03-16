import React from "react";
import ReactECharts from "echarts-for-react";
import { useAppSelector } from "../../hooks/redux-hooks";

import "./chart.scss";

interface ICountry {
  id: string;
  value: number;
  name: string;
}

interface IChartProps {
  region: string;
  countries: ICountry[];
}

export const Chart: React.FC<IChartProps> = ({ region, countries }) => {
  const currentTabSize = useAppSelector((state) => state.tabs.currentTabSize);

  const chartClassname = `chart chart--${currentTabSize}`;

  const option = {
    backgroundColor: "#2c343c",
    title: {
      text: region.slice(0, 1).toUpperCase() + region.slice(1),
      left: "center",
      top: 20,
      textStyle: {
        color: "#ffffff",
        fontStyle: "normal",
        fontFamily: "Roboto, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        lineHeight: 23,
      },
    },

    tooltip: {
      trigger: "item",
    },

    visualMap: {
      show: false,
      min: countries[countries.length - 1].value,
      max: countries[0].value,
      inverse: false,
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "55%",
        center: ["50%", "50%"],
        data: countries,
        clockwise: false,

        label: {
          color: "rgba(255, 255, 255, 0.3)",
        },
        labelLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, 0.3)",
          },
          smooth: 0.2,
          length: 10,
          length2: 20,
        },
        itemStyle: {
          color: "#c23531",
          shadowBlur: 200,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    ],
  };

  return (
    <div className={chartClassname}>
      <ReactECharts option={option} style={{ width: "100%" }} />
    </div>
  );
};
