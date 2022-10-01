import React, {Component, useEffect, useState} from "react";
import {connect, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {userService} from "../services/user.service";
const avatar = "../assets/images/avatar.png"


export default function Profile() {

      const nav = useNavigate();
    const currentUser  = useSelector(state => state.auth.user);
const [user, setUser] = useState(currentUser)
    const fetchUser = async() => {
         const result = await userService.getUserById(currentUser.id)
         setUser( result.data)
    }
    useEffect( () => {
        if (!currentUser) {
            nav("/login")
        }
        fetchUser()
    })

    return (
      <div className="card bg-light text-dark">

          <div className="card text-dark bg-light justify-content-center">
              <div><img className="" src={avatar} alt="John" style={{width:"60px", height:"60px", borderRadius:"50%"}}/></div>
              <h1>{user.firstName}Umur Inan</h1>
              <p className="title">Professor of WAA</p>
              <p>Maharshi I University</p>
              <strong> {currentUser.email} </strong>
              <div className="d-inline-block justify-content-center w-100">
                  <a href="#" className="mr-3"><i className="fa fa-dribbble"></i></a>
                  <a href="#" className="m-2"><i className="fa fa-twitter"></i></a>
                  <a href="#" className="m-2"><i className="fa fa-linkedin"></i></a>
                  <a href="#" className="ml-3"><i className="fa fa-facebook"></i></a>
              </div>

              <p>
                  <button>Contact</button>
              </p>
          </div>


          </div>
    );

}

