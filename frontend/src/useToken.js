import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("access_token");
    const userToken = tokenString;
    return userToken?.token;
  };

  const getRefreshToken = () => {
    const tokenString = sessionStorage.getItem("refresh_token");
    const userToken = tokenString;
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());
  const [refreshToken, setRefreshToken] = useState(getRefreshToken());

  const saveToken = (userToken, refreshToken) => {
    sessionStorage.setItem("access_token", JSON.stringify(userToken));
    sessionStorage.setItem("refresh_token", JSON.stringify(refreshToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token,
    refreshToken,
  };
}
