import * as React from "react";
import {Link} from "react-router-dom";
// function based component
export default function () {
    return (
        <div className="flex d-inline-flex align-bottom">
            <nav className="navbar fixed-bottom bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">Home</Link>
                    <Link className="navbar-brand" to="#"> <small>&copy; Copyright 2022, PMP Geeks</small></Link>
                    <Link className="navbar-brand" to="#"> Contanct us</Link>

                </div>
            </nav>
        </div>
    );

}
