import React,{useState, useEffect} from "react";
import axios from "axios";
import ReactEcharts from "echarts-for-react";

const PropertySquareFeet = () => {
    const [property, setProperty] =useState([]);

    useEffect(()=>{
      axios.get(process.env.REACT_APP_API_URL+"/properties")
      .then((res)=>{
            setProperty(res.data);
      })
   },[])
 //print city from objects    
 const space = property.map((p) => p.squareFeet);
 const name = property.map((p) =>p.propertyName);

   const option = {
    title: {
        text: 'Name Properties of Square Feet',
        left: 'center'
      },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: name,
      type: 'category',
      axisLabel: { interval: 0, rotate: 30 }
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: space,
        type: 'line',
        areaStyle: {}
      }
    ]
  };
  return (
    <div>
        < ReactEcharts option={option}/>
    </div>
  )
}

export default PropertySquareFeet