import axios from "axios";
import authHeader from "./auth-header";

//const API_URL = "http://localhost:8080/users/";
//const API_URL = "http://localhost:4040";

const   getAllUsers = () => {
  return axios.get( "/users",{ headers: authHeader() } );
}
const  getUserById = (id) => {
    return axios.get("users/"+id, { headers: authHeader() });
  }
const  getGreetings = () => {
    return axios.get("users/greeting", { headers: authHeader() });
  }

export const  userService = {getAllUsers: getAllUsers, getGreetings, getUserById}

