import {Button, Image, NavDropdown} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import logo from "../../img/logo.svg"
import {useDispatch, useSelector} from "react-redux";
import {logout, login, fetchUser} from "../../store/userSlicer";
import {useEffect} from "react";
import {UserManger} from "../auth/config";
import CustomerHeaderMenu from "./CustomerHeaderMenu";
import {useJwt} from "react-jwt";
import OwnerHeaderMenu from "./OwnerHeaderMenu";
import AdminHeaderMenu from "./AdminHeaderMenu";

function Header() {
    const {user} = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const {decodedToken} = useJwt(user.access_token);
    const userRoles = decodedToken?.realm_access?.roles ?? [];
    useEffect(() => {
        dispatch(fetchUser())
    }, [])
    UserManger.events.addUserLoaded((user) => {
        dispatch(fetchUser())
    });
    const onSignOut = () => {
        dispatch(logout());
    }
    const onSignIn = () => {
        dispatch(login());
    }
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid style={{border: "2px   "}}>
                    <Nav.Item style={{border: "2px   "}}><Link to={"/dashboard"}><Image src={logo}/></Link></Nav.Item>
                    {Object.keys(user).length === 0 ?
                        <Nav.Item><Button onClick={onSignIn}>Sign in</Button></Nav.Item>
                        :
                        userRoles.includes("customer") ?
                            <CustomerHeaderMenu user={user} onSignOut={onSignOut}/>
                            : userRoles.includes("owner") ?
                                <OwnerHeaderMenu user={user} onSignOut={onSignOut}/> :
                                <AdminHeaderMenu user={user} onSignOut={onSignOut}/>
                    }
                </Container>

            </Navbar>
        </>
    );

}

export default Header;