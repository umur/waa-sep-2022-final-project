import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import "../../Style.css"
import {Link, Outlet} from "react-router-dom";

function LeftPanel() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Link to="dashboard" relative="path">
                Dashboard
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="properties" relative="path">
                Properties
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="profile" relative="path">
                Profile
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="owners" relative="path">
                Owners
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="customer" relative="path">
                Customers
              </Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Outlet />
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default LeftPanel;