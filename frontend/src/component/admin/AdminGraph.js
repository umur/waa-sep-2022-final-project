import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["x", "Customer", "Registered Property"],
  [0, 0, 0],
  [1, 10, 5],
  [2, 23, 15],
  [3, 17, 9],
  [4, 18, 10],
  [5, 9, 5],
  [6, 11, 3],
  [7, 27, 19],
];

export const options = {
  hAxis: {
    title: "Monthly Time Slot",
  },
  vAxis: {
    title: "Popularity",
  },
  series: {
    1: { curveType: "function" },
  },
};

export default function AdminGraph() {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="40%"
      data={data}
      options={options}
    />
  );
}








// import React from "react";
// import { Chart } from "react-google-charts";
// import {fetchMonthlyCustomer} from "./../../store/graphSlicerAdmin";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect} from "react";

// export const options = {
//   hAxis: {
//     title: "Monthly Time Slot",
//   },
//   vAxis: {
//     title: "Popularity",
//   },
//   series: {
//     1: { curveType: "function" },
//   },
// };

// export default function AdminGraph() {

// //   const {monthlyRegCustomers, status} = useSelector((state) => state.graphCustomer);
// //   console.log(monthlyRegCustomers)
// // console.log(`hello dear ${monthlyRegCustomers[0]}`)

// //   const dispatch = useDispatch();

// //   useEffect(() => {

// //     dispatch(fetchMonthlyCustomer());

// //   }, []);


// const numbers = [0,1,2,3,4,5,6]
// const monthlycustomers = [8,4,2,4,0,7,0]
// const monthlyproperties = [4,2,9,1,3,0,3]

// const headings = ["x","Customer","Registered Property"];

// const result = []

// result.fill(numbers,0)
// result.fill(monthlycustomers,1)
// result.fill(monthlyproperties,2)


// let values = [];
// for(let i =0; i<8; i++){
//    values[i] = [numbers[i],monthlycustomers[i],monthlyproperties[i]];
// }

// const data = headings.concat(values)
// console.log(data)

// // let graphData = [headings,]
// // console.log(graphData[1])





//   return (
//     <Chart
//       chartType="LineChart"
//       width="100%"
//       height="40%"
//       data={data}
//       options={options}
//     />

//   );
// }



