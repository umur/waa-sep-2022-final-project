import React from "react";
const AuthContext = React.createContext({
  user: {},
  setUser: () => {},

  accessToken: "",
  setAccessToken: () => {},

  refreshToken: "",
  setRefreshToken: () => {},

  //   accessToken: "",
  //   setAccessToken(token) {
  //     sessionStorage.setItem("access_token", token);
  //     setUser(jwtDecode(token));
  //   },

  //   refreshToken: "",
  //   setRefreshToken(token) {
  //     sessionStorage.setItem("refresh_token", token);
  //     refreshToken = token;
  //   },

  hasRoleOwner: () => {
    if (this.user.realm_access.roles.includes("Owner")) {
      return true;
    }
  },
  hasRoleAdmin: () => {
    if (this.user.realm_access.roles.includes("Admin")) {
      return true;
    }
  },
  hasRoleCustomer: () => {
    if (this.user.realm_access.roles.includes("Customer")) {
      return true;
    }
  },
});

export default AuthContext;
