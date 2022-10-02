import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AuthContext from "../../AuthContext";
import { useContext } from "react";

const NavBarComponent = () => {
  const auth = useContext(AuthContext);

  const logout = () => {
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("refresh_token");
    sessionStorage.removeItem("user");
    window.location.href = "/login";
  };

  const isLoggedIn = () => {
    if (sessionStorage.getItem("access_token")) {
      return true;
    }
  };

  const populateLogOut = () => {
    if (isLoggedIn()) {
      return (
        <Link onClick={logout} type="button" class="btn btn-outline-light me-2">
          Logout
        </Link>
      );
    }
  };


  const populateLogIn = () => {
    if (!isLoggedIn()) {
      return (
        <Link to={"/login"} type="button" class="btn btn-outline-light me-2">
          Login
        </Link>
      );
    }
  };


  const hasRoleOwner = () => {
    try {
      if (auth.user.realm_access.roles.includes("Owner")) {
        return true;
      }
    } catch (error) {
      return false;
    }
  };
  const hasRoleAdmin = () => {
    try {
      if (auth.user.realm_access.roles.includes("Admin")) {
        return true;
      }
    } catch (error) {
      return false;
    }
  };
  const hasRoleCustomer = () => {
    try {
      if (auth.user.realm_access.roles.includes("Customer")) {
        return true;
      }
    } catch (error) {
      return false;
    }
  };

  const populatAddProperty = () => {
    let addProperty = "";
    if (hasRoleOwner() || hasRoleAdmin()) {
      addProperty = (
        <li>
          <Link to={"/add-property"} class="nav-link px-2 text-white">
            Add Property
          </Link>
        </li>
      );
    }
    return addProperty;
  };

  const populatUserManagement = () => {
    let userManagement = "";
    if (hasRoleAdmin()) {
      userManagement = (
        <li>
          <Link to={"/users"} class="nav-link px-2 text-white">
            User Management
          </Link>
        </li>
      );
    }
    return userManagement;
  };
  const populateFavorite = () => {
    let favorite = "";
    if (hasRoleCustomer()) {
      favorite = (
        <li>
          <Link to={"/favorite"} class="nav-link px-2 text-white">
            My favorites
          </Link>
        </li>
      );
    }
    return favorite;
  };

  return (
    <header class="p-3 text-bg-dark">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link
            to={"/home"}
            class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="white"
              class="bi bi-house-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
              ></path>
              <path
                fill-rule="evenodd"
                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
              ></path>
            </svg>
          </Link>

          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to={"/home"} class="nav-link px-2 text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/Chart"} class="nav-link px-2 text-white">
                Chart
              </Link>
            </li>
            {populateFavorite()}
            {populatAddProperty()}
            {populatUserManagement()}
          </ul>

          <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input
              type="search"
              class="form-control form-control-dark text-bg-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div class="text-end">
            {/* <Link
              to={"/login"}
              type="button"
              class="btn btn-outline-light me-2"
            >
              Login
            </Link> */}
            {populateLogIn()}
            {populateLogOut()}
            <Link to={"/signup"} type="button" class="btn btn-warning">
              Sign-up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default NavBarComponent;
