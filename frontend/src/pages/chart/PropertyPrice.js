import React,{useState, useEffect} from "react";
import axios from "axios";
import ReactEcharts from "echarts-for-react";

const PropertyPrice = () => {
    const [property, setProperty] =useState([]);

  useEffect(()=>{
    axios.get(process.env.REACT_APP_API_URL+"/properties")
    .then((res)=>{
          setProperty(res.data);
    })
 },[]);

  //print city from objects    
  const price = property.map((p) => p.rentAmount);
  const city = property.map((p) =>p.city);

  console.log(price);

  const option = {
    title: {
        text: 'Property Price of Cities',
        left: 'center'
      },
    xAxis: {
      type: 'category',
      data: city
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data:  price,
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  };
  return (
    <div>
        < ReactEcharts option={option}/>
    </div>
  )
}

export default PropertyPrice