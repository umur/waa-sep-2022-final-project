import React, {useEffect, useRef, useState} from "react";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import {useDispatch, useSelector} from "react-redux";
import {login} from "../reducers/authSlice";
import {useNavigate} from "react-router-dom";

export default function Login() {
    const dispatch = useDispatch()
    const nav = useNavigate()
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const message = useSelector((state) => state.message.message)

    const inputs = {
        userName: '',
        password: ''
    }

    const userNameRef = useRef()
    const passwordRef = useRef()

    const userNameChanged = (e) => {
        inputs.userName = e.target.value
    }
    const passwordChanged = (e) => {
        inputs.password = e.target.value
    }
    const wrapLogin = (dispatch, inputs) => new Promise((resolve, reject) => {
        dispatch(login({...inputs}));
        resolve();
    })
    const handleLogin = async (e) => {
        e.preventDefault();
        await wrapLogin(dispatch, inputs).then((response) => {
           //window.location.reload()
            nav('/')
        })
            .catch(error => alert(error))
    }

    const checkLogin = () => {
        if (isLoggedIn && localStorage.getItem('user')) {
            nav("/profile")
        }
    }
    useEffect(() => {
        checkLogin()
    }, [isLoggedIn])

    return (
        <div className=" row col-md-6 ml-5">
            <div className="card text-center">
                <h1>
                    <center>Login</center>
                </h1>

                <Form>
                    <div className="form-group">
                        <label htmlFor="userName">UserName</label>
                        <Input type="text"
                               className="form-control" onChange={userNameChanged}
                               ref={userNameRef}

                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <Input
                            type="password"
                            className="form-control"
                            onChange={passwordChanged}
                            ref={passwordRef}
                        />
                    </div>

                    <div className="form-group">
                        <button
                            className="btn btn-dark btn-block"
                            onClick={handleLogin}
                        >
                            <span>Login</span>
                        </button>
                    </div>

                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                    <CheckButton
                        style={{display: "none"}}
                        ref={(c) => {
                        }}
                    />
                </Form>
            </div>
        </div>
    );

}

