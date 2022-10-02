import React,{useState, useEffect} from "react";
import axios from "axios";
import ReactEcharts from "echarts-for-react";

const PropertyLocation = () => {
    const [property, setProperty] =useState([]);

  useEffect(()=>{
    axios.get(process.env.REACT_APP_API_URL+"/properties")
    .then((res)=>{
          setProperty(res.data);
    })
 },[])
  //print city from objects
   const city = property.map((p) =>p.city);
  //count duplicate cities
   const cityCounts = {};
   city.forEach(function (x) { cityCounts[x] = (cityCounts[x] || 0) + 1; });
  
// change position 
    const a =Object.values(cityCounts);
    const b =Object.values(city);

    const merge=[];
    for(let i=0; i<b.length; i++) {
    merge.push({value:a[i],name:b[i]});
    }
  
   
    const option = {
    title: {
      text: 'Property of Location',
      subtext: 'Amount',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: merge,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
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

export default PropertyLocation