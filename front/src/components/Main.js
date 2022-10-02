import React, { useState,createContext, useEffect } from 'react'
import PropertyList from './PropertyList'
import axios from 'axios'

const init=[]

export const propContext=createContext()
const Main = () => {
    const [data, setData]=useState(init)

useEffect(()=>{
  
     axios.get(
        "http://localhost:8080/api/v1/properties/props"
      ).then((result) => {
        setData(result.data)
        console.log(result.data)
      }).catch((err) => {
        console.log(err)
      })
},[])

    
  return (

<propContext.Provider value={data}>
    <div>
      <PropertyList/>
    </div>
</propContext.Provider>

  )
}

export default Main