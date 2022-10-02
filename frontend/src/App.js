import "./App.css";
import NavBarComponent from "./component/navbar/NavBarComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Chart from "./pages/chart/Chart";
import FooterComponent from "./component/footer/FooterComponent";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import EditProperty from "./pages/editProperty/EditProperty";
import ViewProperty from "./pages/viewProperty/ViewProperty";
import AddProperty from "./pages/addProperty/AddProperty";
import axios from "axios";
import AuthContext from "./AuthContext";
import { React, useState } from "react";
import UserList from "./pages/userManagement/UserList";
import Favorite from "./pages/favorite/Favorite";
import AdminDashboard from "./pages/adminPage/AdminDashboard";

axios.interceptors.request.use(function (config) {
  // get the request url
  const url = config.url;
  if (config.url.endsWith("/auth") || config.url.endsWith("/users")) {
    return config;
  }
  const token = sessionStorage.getItem("access_token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (err) {
    console.log(err);
    if (err.resposne.status === 401 || err.response.status === 403) {
      console.log("Unauthorized");
      sessionStorage.removeItem("access_token");
      sessionStorage.removeItem("refresh_token");
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);

function App() {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");

  return (
    <div>
      <AuthContext.Provider
        value={{
          user,
          setUser,
          accessToken,
          setAccessToken,
          refreshToken,
          setRefreshToken,
        }}
      >
        <BrowserRouter>
          <NavBarComponent />
          <div>
            <Routes>
              <Route exect path="/" element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/chart" element={<Chart />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/users" element={<UserList />}></Route>
              <Route
                path="/editProperty/:id"
                element={<EditProperty />}
              ></Route>
              <Route path="/property/:id" element={<ViewProperty />}></Route>
              <Route path="/add-property" element={<AddProperty />}></Route>
              <Route path="/favorite" element={<Favorite />}></Route>
              <Route
                path="/admin-dashboard"
                element={<AdminDashboard />}
              ></Route>
            </Routes>
          </div>
          <FooterComponent />
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
