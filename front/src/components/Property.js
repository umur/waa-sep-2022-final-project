import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { idActions } from '../store';



const Property = (props) => {

  
  const nav=useNavigate()
  const dispatch=useDispatch();
  const role=useSelector((state)=>state)

  console.log(role.propId)


 
  
  
   const  handleRent = ()=>{
   if(role.auth.isAuthenticated==true && role.auth.role=="TENANT"){
    
 
    dispatch(idActions.updateId(props.id))
 
    

    nav("/rent")
   }
  else{ 
  nav("/login")
  }
    
  }
  return (
    <div>
    <div> Name: {props.propertyName} </div>
    <div>  Type: {props.propertyType}</div>
    <div>   N bad Room: {props.noOfBedRoom}</div>
    <div>  N Bath room: {props.noOfBathRoom}</div>
    <div> RentAmount:  {props.rentAmount}</div>
    <div> Address: {props.address.street}</div>
    <div><button onClick={handleRent} type='button' className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Rent</button></div>
      
      
      
      
      </div>
  )
}

export default Property