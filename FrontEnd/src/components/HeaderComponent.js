import * as React from "react";
import {Link, useNavigate} from "react-router-dom";
import {login, logout} from "../reducers/authSlice";
import {useDispatch, useSelector} from "react-redux";
const logo = "assets/images/logo.png"
// functions are preferred ways of creating components to classes
export default function HeaderComponent(props) {
    const currentUser = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const nav = useNavigate()

    const handleLogOut = ( ) => {
        localStorage.removeItem('user')
        dispatch(logout)
        nav('/login')
    }
    const checkSession = ( ) => {
        localStorage.removeItem('user')
        dispatch(logout)
        nav('/login')
    }
    const handleLogIn = () => {
        nav('/login')
    }
    return (
            <div className="mb-2">
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <Link to={"/"} className="navbar-brand ml-2">
                        PMP.com
                    </Link>
                    <div className="navbar-nav mr-auto">

                        {currentUser && (
                            <li className="nav-item">
                                <Link to={"/admin"} className="nav-link">
                                   <strong className="text-warning">Admin</strong>
                                </Link>
                            </li>
                        )}
                        {currentUser && (
                            <li className="nav-item">
                                <Link to={"/messages/"+currentUser.id} className="nav-link ">
                                    <strong >Messages
                                        <span className="badge text-warning btn-danger ">10</span>
                                    </strong>
                                </Link>
                            </li>
                        )}

                        <li className="nav-item">
                            <Link to={"/properties"} className="nav-link">
                                Browse
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/register"} className="nav-link">
                                Register
                            </Link>
                        </li>
                    </div>

                    {!!currentUser ? (
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"/profile"} className="nav-link">
                                    Profile
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href={'/login'} className="nav-link" onClick={handleLogOut}>
                                    LogOut
                                </a>
                            </li>
                        </div>
                    ) : (
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"/login"} className="nav-link" onClick={handleLogIn}>
                                    Login
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to={"/signup"} className="nav-link">
                                    Sign Up
                                </Link>
                            </li>
                        </div>
                    )}
                </nav>
            </div>
    );

}
