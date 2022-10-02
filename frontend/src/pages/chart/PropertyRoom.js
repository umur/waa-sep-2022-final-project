import React,{useState, useEffect} from "react";
import axios from "axios";
import ReactEcharts from "echarts-for-react";

const PropertyRoom = () => {
    const [property, setProperty] =useState([]);

  useEffect(()=>{
    axios.get(process.env.REACT_APP_API_URL+"/properties")
    .then((res)=>{
          setProperty(res.data);
    })
 },[])

   //print city from objects
   const city = property.map((p) =>p.numberOfRooms);
   const name = property.map((p) =>p.propertyName);
   
// change position 
    const a =city;
    const b =name;

    const merge=[];
    for(let i=0; i<b.length; i++) {
    merge.push({value:a[i],name:b[i]});
    }
 console.log(merge);
 const option = {
    title: {
        text: 'Property Rooms',
        subtext: 'Impormation',
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
        radius: ['30%', '60%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: merge
      }
    ]
  };
  return (
    <div>
        < ReactEcharts option={option}/>
    </div>
  )
}

export default PropertyRoom