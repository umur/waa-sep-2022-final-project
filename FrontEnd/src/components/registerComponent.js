import { useState } from "react";
import {userService} from "../services/user.service";
import authHeader from "../services/auth-header";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Register(){

    const nav = useNavigate()
    const [personState, setPersonState] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setPersonState(values => ({...values, [name]: value}))
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        await axios.post("/users", personState, authHeader()).then(res =>
        {       alert("Success. Thank you")
            nav('/')
    })
             .catch (error => {
                 console.log('Registration error: ', error)
             })
        console.log(JSON.stringify(personState));
    }
    return(
        <div id="reg">
            <form onSubmit={handleSubmit}>

                <div className="container">
                    <div className="row">
                        <h3>Register</h3>
                    </div>
                    <div className="row mt-3">
                        <div className="col-xs-12 col-sm-6">
                            <label>First Name</label>
                            <input type="text" className="form-control" name = "firstName" onChange = {handleChange}  placeholder="First Name"/>
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <label>Last Name</label>
                            <input type="text" className="form-control" name="lastName" onChange = {handleChange} placeholder="Last Name"/>
                        </div>
                    </div>
                    <div className="row  mt-3">
                        <div className="col-xs-12 col-sm-6">
                            <label>Phone</label>
                            <input type="telephone" name="phone" id="phone" className="form-control" onChange = {handleChange} placeholder="Phone"/>
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <label>Email</label>
                            <input type="email" name="email" id="email" className="form-control" onChange = {handleChange} placeholder="Email"/>
                        </div>
                    </div>
                    <div className="row  mt-3">
                        <div className="col-xs-12 col-sm-6">
                               <label>Role:</label><br/>
                           <div>
                               <label htmlFor="admin"  className="mr-2">Admin </label>
                               <input type="radio" value="admin" name="role" id="admin"   onChange = {handleChange} />

                               <label htmlFor="owner" className= "ml-3 mr-2">Owner</label>
                               <input type="radio"  value="owner" name="role" id="owner"  onChange = {handleChange} />

                               <label htmlFor="customer" className="ml-3 mr-2">Customer</label>
                               <input type="radio"  value="customer" name="role" id="customer"   onChange = {handleChange} />
                           </div>
                        </div>

                        <div className="col-xs-12 col-sm-6">
                            <label>Password</label>
                            <input type="Password" required={true} name="password" id="password" className="form-control" onChange = {handleChange} placeholder="Password"/>
                        </div>

                    </div>
                    <h4> Address</h4>
                    <div className="row  mt-3">
                        <div className="col-xs-12 col-sm-4">
                            <label>Street</label>
                            <input type="text" name="street" onChange={handleChange} id="street" className="form-control" placeholder="Street"/>
                        </div>
                        <div className="col-xs-12 col-sm-4">
                            <label>City</label>
                            <input type="text" name="city" id="city" onChange={handleChange} className="form-control" placeholder="City"/>
                        </div>
                        <div className="col-xs-12 col-sm-4" >
                            <label>Zip Code</label>
                            <input type="text" name="zip" id="zip" onChange={handleChange} className="form-control" placeholder="Zip code"/>
                        </div>
                    </div>
                    <div className="row  mt-3">
                        <div className="col-xs-12 col-sm-4">
                            <input  type="submit" value="Submit" className="form-control btn btn-success"/>
                        </div>
                        <div className="col-xs-12 col-sm-4">
                            <input type="button" value="Cancel" className="form-control btn btn-danger"/>
                        </div>
                        <div className="col-xs-12 col-sm-4">
                            <input type="clear" value="Clear" className="form-control btn btn-warning"/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
