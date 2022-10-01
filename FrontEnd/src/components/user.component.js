import React, {useEffect, useState} from "react";

import {userService} from "../services/user.service";
import EventBus from "../common/EventBus";
import {useDispatch} from "react-redux";
import {logout} from "../reducers/authSlice";

export default function User() {

    const initialState = {
        content: ""
    };
    let [state, setState] = useState(initialState)
const dispatch = useDispatch()
    const fetchUser = () => {
        userService.getGreetings().then(
            response => {
                setState({
                    content: response.data.message
                });
            },
            error => {
                setState({
                    content:
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString()
                });

                if (error.response && error.response.status === 401) {
                    dispatch(logout);
                }
            }
        )
    }
    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <div className="card bg-light text-dark">
            <h3>{state.content}</h3>
            <a href="#"><i className="fa fa-dribbble"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a>
        </div>
    )

}
