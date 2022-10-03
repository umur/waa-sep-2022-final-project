import {UserManger} from "./config";
import {useNavigate} from "react-router";
import {useEffect} from "react";

export default function () {
    const navigate = useNavigate();
    useEffect(() => {
        UserManger.signoutRedirectCallback()
            .then((user) => {
                //TODO:: redirect based on user roles
                navigate("/dashboard", {replace: true});
            })
            .catch(console.log);
    }, [])
    return (
        <div>
            Thank you for logout
        </div>
    );
}