import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../store'



const Navbar = () => {
  const role=useSelector((state)=>state)
  const dispatch =useDispatch()
  const logOut=()=>{
    console.log("bachiiiiiiiiiiiiiiir")
  dispatch(authActions.logout())
  
  console.log(role.auth.isAuthenticated)

  }
  return (
    <div className='border-b font-bold p-5  bg-gray-600 w-full sticky top-0'>
      <h1 className='inline-block'>Property Management System</h1>
      <div className='inline-block float-right'>
       <Link className='px-6 py-2 text-blue-100 no-underline bg-blue-500 rounded hover:bg-blue-600 hover:underline hover:text-blue-200 m-2' to="/" >Home</Link>
       <Link className='px-6 py-2 text-blue-100 no-underline bg-blue-500 rounded hover:bg-blue-600 hover:underline hover:text-blue-200 m-2' to="/login">Login</Link>
       <Link onClick={()=>{logOut()}} className='px-6 py-2 text-blue-100 no-underline bg-blue-500 rounded hover:bg-blue-600 hover:underline hover:text-blue-200 m-2' to="/login">Logout</Link>
       <Link className='px-6 py-2 text-blue-100 no-underline bg-blue-500 rounded hover:bg-blue-600 hover:underline hover:text-blue-200 m-2' to="/sign">Sign Up</Link>      </div>
    </div>
  )
}

export default Navbar