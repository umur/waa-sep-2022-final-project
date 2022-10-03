import React from 'react';
import Container from 'react-bootstrap/Container';
import AdminLeftPanel from './AdminLeftPanel';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router';

export default function Admin() {
    return (
        <Container className="mt-3">
            <Row>
                <Col sm={3}>
                    <AdminLeftPanel />
                </Col>
                <Col>
                    <Outlet />
                </Col>
            </Row>
        </Container>
    )
}