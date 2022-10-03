import {useEffect, useState} from "react";
import {oidcConfig} from "../auth/config";
import {NavDropdown} from "react-bootstrap";

export default function (){
    const [resetPasswordUrl, updateResetPasswordUrl] = useState("");
    useEffect(() => {
        const url = oidcConfig.authority +
            "/protocol/openid-connect/auth?" +
            "client_id=" +oidcConfig.clientId+
            "&redirect_uri=" +window.location.origin+"/dashboard"+
            "&response_type=code" +
            "&scope=" +oidcConfig.scope.replaceAll(" ", "+")+
            "&state=91fa2c86fd9c4e57b224e058aa9d9380" +
            "&code_challenge=4Q-7xNsQROGE4hKH7uDyVp3-OVhcIyihGX6R0NEFzZM" +
            "&code_challenge_method=S256" +
            "&response_mode=query" +
            "&kc_action=UPDATE_PASSWORD"
        updateResetPasswordUrl(url);
    }, [])
    const onResetPassword = () => {
        window.location.replace(resetPasswordUrl);
    }
    return (
        <NavDropdown.Item onClick={onResetPassword}>Reset Password</NavDropdown.Item>
    );
}