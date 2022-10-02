import React, { useContext } from 'react'
import Property from './Property'
import { propContext } from './Main'


const PropertyList = () => {
    const myContext=useContext(propContext)
    console.log(myContext)
  return (
    <div className='h-screen flex'>
        {myContext.map((t)=>{
         
           return ( 
            <div className='border-solid border-2 border-indigo-600 rounded-md m-4 w-55 inline-block h-64 p-3.5'>
           <Property key={t.id} propertyName={t.propertyName} id={t.id} propertyType={t.propertyType}
           noOfBedRoom={t.noOfBedRoom} noOfBathRoom={t.noOfBathRoom} rentAmount={t.rentAmount}
           address={t.address}/>
           </div>
           
           )
        })}
        
       
    </div>
  )
}

export default PropertyList