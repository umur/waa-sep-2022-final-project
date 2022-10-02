import React, { createRef, useEffect } from "react";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import axios from "axios";

const Signup = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState("Owner");
  const navigate = useNavigate();

  //   useEffect(() => {
  //     axios.get("http://localhost:9090/users/roles").then((res) => {
  //       setRoles(res.data);
  //     });
  //   }, []);

  const CREATE_USER_URL = process.env.REACT_APP_API_URL + "/users";

  const createUser = (e) => {
    e.preventDefault();

    const user = { firstName, lastName, email, password, role };

    axios
      .post(CREATE_USER_URL, user)
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  };

  return (
    <div className="container mt-5">
      <div className="card ms-auto me-auto p-3 shadow-lg custom-card">
        {/* <FontAwesomeIcon icon={faUserCircle} className="ms-auto me-auto user-icon" /> */}

        {/* {errorMessage &&
                    <div className="alert alert-danger">
                        {errorMessage}
                    </div>
                } */}

        <form noValidate>
          <div className="form-group">
            <label htmlFor="name">First Name: </label>
            <input
              type="text"
              className="form-control"
              name="First Name"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <div className="invalid-feedback">First Name is required.</div>
          </div>
          <div className="form-group">
            <label htmlFor="name">Last Name: </label>
            <input
              type="text"
              className="form-control"
              name="Last Name"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <div className="invalid-feedback">First Name is required.</div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="invalid-feedback">Email is required.</div>
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password: </label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="invalid-feedback">Password is required.</div>
          </div>

          <div className="form-group">
            <label htmlFor="Password">Role: </label>
            <select
              className="form-select"
              name="role"
              required
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="Owner">Owner</option>
              <option value="Customer">Customer</option>
            </select>
            <div className="invalid-feedback">Role is required.</div>
          </div>

          <button
            className="btn btn-info w-100 mt-3"
            onClick={(e) => createUser(e)}
          >
            Sign Up
          </button>
        </form>
        <Link
          to="/login"
          className="btn btn-link"
          style={{ color: "darkgray" }}
        >
          I have an Account!
        </Link>
      </div>
    </div>
  );
};
export default Signup;
