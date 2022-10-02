import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Sign = () => {
  const [role,setRole]=useState("")
  const [msg,setMsg]=useState("")
  const nav=useNavigate()


const getRole=(e)=>{
const r=e.target.value
setRole(r)
}

  const handleSign = async (e) => {
    e.preventDefault();
   
    const confirm= e.target.elements.confirm?.value
    const credentials={
      firstName : e.target.elements.fName?.value,
      lastName : e.target.elements.lName?.value,
      email : e.target.elements.email?.value,
      password : e.target.elements.password?.value,
      role : role,
      
  }

  if(confirm!==credentials.password){
setMsg("password and confirmation dont match")
return

  }
  setMsg("")
try {
  const response =axios.post("http://localhost:8080/api/v1/uaa/signup",credentials);
  console.log(response.data)
} catch (error) {
  console.log(error)
}

    nav("/login")
  
  
    };

   
  

  return (
    <div className="h-screen flex bg-gray-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Register
        </h1>

        <form onSubmit={handleSign}>
          <div>
            <label>First Name</label>
            <input
              type=""
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="fName"
              placeholder="First Name"
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type=""
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="lName"
              placeholder="Last Name"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="email"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="password"
              placeholder="Your Password"
            />
          </div>
          <div>
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="confirm"
              placeholder="Confirm Password"
            />
          </div>
          <label htmlFor="password">Register As</label>
          <div className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 input-group mb-3`}>
         
            <select onChange={getRole}>
              <option value="DEFAULT" disabled />
              <option value="TENANT">Customer</option>
              <option value="LANDLORD">Owner</option>
            </select>
          </div>

          <div className="flex justify-center items-center mt-6">
            <button
             className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
            >
              Submit
            </button>
            <div>{msg}</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign;
