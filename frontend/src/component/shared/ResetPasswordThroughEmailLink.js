import {useEffect, useState} from "react";
import {oidcConfig} from "../auth/config";
import {NavDropdown} from "react-bootstrap";

export default function (){
    const [resetPasswordUrl, updateResetPasswordUrl] = useState("");
    useEffect(() => {
        const url = oidcConfig.authority +
            "/login-actions/reset-credentials?" +
            "client_id=" +oidcConfig.clientId
        updateResetPasswordUrl(url);
    }, [])
    const onResetPassword = () => {
        window.location.replace(resetPasswordUrl);
    }
    return (
        <NavDropdown.Item onClick={onResetPassword}>Reset Password With Email</NavDropdown.Item>
    );
}