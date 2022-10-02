import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode'
import { authActions } from '../store';



const Login = () => {

    const dispatch =useDispatch()
    const navigate =useNavigate()
    const selector =useSelector(state=>state)
    const[loginState,setLoginState]=useState("")


    const handleFormSubmit = (e) => {
        e.preventDefault();
        const credentials={
            email : e.target.elements.email?.value,
            password : e.target.elements.password?.value
        }
        console.log(credentials)
       const getRes =async()=>{
      
            const result = await  axios.post('http://localhost:8080/api/v1/uaa/login', credentials)
           
                const decoded = jwt_decode(result.data.accessToken);
                dispatch(authActions.loginSuccessful(decoded.authorities));
                localStorage.setItem('token', JSON.stringify(result.data))
                setLoginState("login succesful")
                const role=selector.auth.role
                console.log(role)
              if(role==="CUSTOMER"){
                navigate('/')  
              }
              

      
       }
    getRes()
    
    };



    return (
        <div className='h-screen flex bg-gray-bg1'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Log in to your account 
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>
                            Login
                        </button>
                    </div>
                    <div>{loginState} </div>
                </form>
            </div>
        </div>
    );
};

export default Login;