import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../../AuthContext";
import jwtDecode from "jwt-decode";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const auth = useContext(AuthContext);

  const hasRoleAdmin = (userInfo) => {
    try {
      if (userInfo.realm_access.roles.includes("Admin")) {
        return true;
      }
    } catch (error) {
      return false;
    }
  };

  const LOGIN_URL = process.env.REACT_APP_API_URL + "/auth";

  //     setUser(user);
  //   }

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { userName, password };
    console.log(LOGIN_URL);
    console.log("Auth", auth);
    console.log(user);
    axios
      .post(LOGIN_URL, user)
      .then((res) => {
        console.log(res);
        console.log(res.data);

        // store the token in local storage
        const userInfo = jwtDecode(res.data.access_token);
        console.log(userInfo);
        auth.setUser(userInfo);

        console.log("getting user info", auth.user);

        sessionStorage.setItem("user", JSON.stringify(userInfo));
        sessionStorage.setItem("access_token", res.data.access_token);
        sessionStorage.setItem("refresh_token", res.data.refresh_token);

        auth.setAccessToken(res.data.access_token);
        auth.setRefreshToken(res.data.refresh_token);

        if (hasRoleAdmin(userInfo)) {
          console.log("Admin");
          navigate("/admin-dashboard");
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        // alert(err.message);
        console.log(err);
        alert("Invalid Credentials");
      });
  };

  return (
    <div className="container mt-5 ">
      <div className="card ms-auto me-auto p-3 shadow-lg custom-card">
        <form noValidate>
          <div className="form-group">
            <label htmlFor="name">Username: </label>
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <div className="invalid-feedback">Username is required.</div>
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

          {/* <div className="form-group">
                        <label htmlFor="Password">Role: </label>
                        <select
                            className="form-select"
                            name='role'
                            required>
                            <option value=''>Select Role</option>
                            <option value="owner">Owner</option>
                            <option value="customer">Customer</option>
                            <option value="admin">Admin</option>

                        </select>
                        <div className="invalid-feedback">
                            Role is required.
                        </div>
                    </div> */}
          {/* <Form.Item name="mfa" valuePropName="checked">
                        <Checkbox>Enable two-factor authentication</Checkbox>
                    </Form.Item> */}

          <button
            className="btn btn-info w-100 mt-3"
            onClick={(e) => handleSubmit(e)}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
