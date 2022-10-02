// Create BootStrab table for user list with react-bootstrap-table-next
//
import React from "react";

import axios from "axios";
import { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const USER_MANAGEMENT_URL = process.env.REACT_APP_API_URL + "/users";

  const fetchUsers = async () => {
    try {
      setError(null);
      setUsers(null);
      setLoading(true);
      const response = await axios.get(USER_MANAGEMENT_URL);
      setUsers(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error occured</div>;
  if (!users) return null;

  function activateUser(userId) {
    axios
      .patch(USER_MANAGEMENT_URL + "/" + userId + "/activate")
      .then((response) => {
        console.log(response.data);
        fetchUsers();
      });
  }

  function deActivateUser(userId) {
    axios
      .patch(USER_MANAGEMENT_URL + "/" + userId + "/deactivate")
      .then((response) => {
        console.log(response.data);
        fetchUsers();
      });
  }

  function resetPassword(userId) {
    axios
      .patch(USER_MANAGEMENT_URL + "/" + userId + "/resetpassword")
      .then((response) => {
        console.log(response.data);
        fetchUsers();
      });
  }

  function createActivateButton(userId) {
    return (
      <button className="btn btn-success" onClick={() => activateUser(userId)}>
        Activate
      </button>
    );
  }

  function createDeactivateButton(userId) {
    return (
      <button className="btn btn-danger" onClick={() => deActivateUser(userId)}>
        De activate
      </button>
    );
  }

  function createControlButton(user) {
    if (user.active) {
      return createDeactivateButton(user.id);
    } else {
      return createActivateButton(user.id);
    }
  }

  function createResetPasswordButton(user) {
    return (
      <button
        className="btn btn-warning"
        onClick={() => resetPassword(user.id)}
      >
        Reset Password
      </button>
    );
  }

  //create bootstrap table for user list using bootstrap loop
  return (
    <div className="container mt-5">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{createControlButton(user)}</td>
              <td>{createResetPasswordButton(user)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
