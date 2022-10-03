import {NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import ResetPasswordLink from "./ResetPasswordLink";
import ResetPasswordThroughEmailLink from "./ResetPasswordThroughEmailLink";

export default function ({user, onSignOut}){
    return (
        <NavDropdown title={user.profile.preferred_username} id="nav-dropdown">
            <NavDropdown.Item eventKey="4.2"><Link to="/admin/dashboard" >Dashboard</Link></NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3" ><Link to="/admin/properties" >Manage Properties</Link></NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3" ><Link to="/admin/customers" >Manage Customers</Link></NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3" ><Link to="/admin/owners" >Manage Owners</Link></NavDropdown.Item>
            <NavDropdown.Divider />
            <ResetPasswordLink/>
            <ResetPasswordThroughEmailLink/>
            <NavDropdown.Item eventKey="4.1" onClick={onSignOut}>Sign out</NavDropdown.Item>
        </NavDropdown>
    )
}