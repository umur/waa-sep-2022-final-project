
import axios from    "axios"
import {defaultMethod} from "react-router-dom/dist/dom";

const login = async (userName, password) =>{
    const config = {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NjM5OTIzNDQsImV4cCI6MTY2NDAxMDM0NH0.zvKnNeFmS1syt8-PiHjOsfQ20Sk77gMRSW7FnSJgGtE"
        }
    }
    console.log('logging in')
    let data = {email: userName, password: password}
    let result =  await axios.post("/uaa",{email: userName, password: password})
        .then(response => {
            if (response.data.accessToken) {
                localStorage.setItem("accessToken", JSON.stringify(response.data.accessToken));
            }
            return response.data;
        });
    JSON.stringify( result.headers)

    return result.data
}
const logout = async () =>{
    let result =  await axios.get("logout");
}
export  { login, logout}
