import React, { useState} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { isEmail } from "validator";

import {login, register} from "../reducers/authSlice";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const userName = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The userName must be between 3 and 20 characters.
      </div>
    );
  }
};

const password = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export default function SignUpSimple () {

  const nav = useNavigate()
  const dispatch = useDispatch()
    let initialState = {
      userName: "",
      email: "",
      password: "",
      successful: false,
    };
const [state, setState] = useState(initialState)
 const  onChangeUsername = (e) => {
    setState({
      userName: e.target.value,
    });
  }

 const onChangeEmail= (e) => {
    setState({...state,
      email: e.target.value,
    });
  }

  const onChangePassword= (e) => {
    setState({...state,
      password: e.target.value,
    });
  }

 const  handleRegister= (e) => {
    e.preventDefault();

    setState({...state,
      successful: false,
    });

    const wrapRegister = (dispatch, inputs) => new Promise((resolve, reject) => {
      dispatch(login({...inputs}));
      resolve();
    })

      wrapRegister(dispatch,{userName:state.userName, email: state.email, password: state.password})
        .then(() => {
          setState({...state,
            successful: true,
          });
          nav('/login')
        })
        .catch(() => {
          setState({...state,
            successful: false,
          });
        });

  }

    const [message, setMessage]  = useState("");

    return (

      <div className="col-md-12">
        <div className="card bg-light text-dark">

          <h1><center>User Registration </center></h1>

          <Form
            onSubmit={handleRegister}

          >
            {!state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="userName">Username</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="userName"
                    value={state.userName}
                    onChange={onChangeUsername}
                    validations={[required, userName]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={state.email}
                    onChange={onChangeEmail}
                    validations={[required, email]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={state.password}
                    onChange={onChangePassword}
                    validations={[required, password]}
                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-dark btn-block">Sign Up</button>
                </div>
              </div>
            )}

            {message && (
              <div className="form-group">
                <div className={state.successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                  {message}
                </div>
              </div>
            )}

          </Form>
        </div>
      </div>
    );

}
