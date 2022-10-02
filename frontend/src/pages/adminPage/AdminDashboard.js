import React from "react";
import ReactEcharts from "echarts-for-react";

const AdminDashboard = () => {
  const option = {
    title: {
      text: "Recent Created Users",
      left: "center",
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [2, 5, 4, 5, 6, 7, 0],
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        },
      },
    ],
  };

  const optionTwo = {
    title: {
      text: "User Profile",
      subtext: "",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },

    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "40%",
        data: [
          { value: 12, name: "Owner" },
          { value: 15, name: "Customer" },
          { value: 2, name: "Admin" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  return (
    <div>
      <h1 className="text-center mt-5 mb-5">Admin Dashboard</h1>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <ReactEcharts option={option} />
          </div>
          <div class="col">
            <ReactEcharts option={optionTwo} />
          </div>
        </div>
        <div class="row mt-5">
          <div class="col">H3</div>
          <div class="col">H4</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
