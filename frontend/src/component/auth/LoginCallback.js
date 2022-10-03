import {UserManger} from "./config";
import {useNavigate} from "react-router";
import {useEffect} from "react";
import {decodeToken} from "react-jwt";
import {useSelector} from "react-redux";

export default function () {
    const navigate = useNavigate();
    useEffect(() => {
        UserManger.signinRedirectCallback()
            .then((user) => {
                const token = decodeToken(user.access_token);
                if(token?.realm_access?.roles.includes("owner")){
                    navigate("/owner", {replace: true});
                }else if(token?.realm_access?.roles.includes("admin")){
                    navigate("/admin/dashboard", {replace: true});
                }else{
                    navigate("/dashboard", {replace: true});
                }
            })
            .catch(console.log);
    }, [])
    return (
        <div>
            Thank you for login
        </div>
    );
}