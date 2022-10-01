import React from "react";
import {history} from '../helpers/history';
import {useDispatch} from "react-redux";
import { logout} from "../reducers/authSlice";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
};

export default function  authVerify()  {
    //const dispatch = useDispatch()
    const logoutWrapper = () => new Promise((resolve, reject) => {
      //  dispatch(logout());
        localStorage.removeItem('user')
        window.location='/login'
        resolve();
    })
   // const nav = useNavigate()

    // Request interceptor for API calls
    axios.interceptors.request.use(
        async config => {
            config.headers = {
                'Authorization': `Bearer ${localStorage.getItem('user')}`,
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
            return config;
        },
        error => {
            Promise.reject(error)
        });

    // Response interceptor for API calls
    axios.interceptors.response.use((response) => {
        return response
    }, async function (error) {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            //nav('/login');
            window.location = '/login'
        }
        return Promise.reject(error);
    });
    history.listen(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            const decodedJwt = parseJwt(user.accessToken);

            if (decodedJwt.exp * 1000 < Date.now()) {
                logoutWrapper().then(() =>
                  // nav('/login')
                    window.location= '/login'
                );
            }
        }
    });
return (
    <div></div>
)
}
