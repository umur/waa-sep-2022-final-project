import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import {deleteProperty, feachAllPropertyWithImage} from "./../../store/propertySlicerAdmin";
import React, { useEffect } from "react";

function AdminManageProperties() {

  const {properties, status} = useSelector((state) => state.propertyAdmin);

  console.log(properties);

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(feachAllPropertyWithImage());

  }, [dispatch]);

  const deletePropertyById = (id)=>{
    dispatch(deleteProperty(id));
  }

  return (
    <>
    <h3 dir="ltr">Manage Properties</h3>
    <hr />
    <Row xs={1} md={5} className="g-4">
      {Array.from(properties, data => (
        <Col >
          <Card>
            <Card.Img variant="top" style={{height:"120px", width:"170px"}} src= {data.image}/>
            <Card.Body>
              <Card.Title style={{fontSize:"22px", fontWeight:"bold"}}>${data.price}</Card.Title>
              <Card.Text style={{fontSize:"12px"}}>
                Id: {data.id}<b>Number of Rooms: </b>{data.numberOfRoom} , <b>Year of Build: </b>{data.yearOfBuild}, <b>Size:</b> {data.size} <b>sqft</b>
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <Button variant="danger" onClick={()=>deletePropertyById(data.id)}>Delete Property</Button>{' '}
        </Col>
      ))}
    </Row>
    </>
  );
}

export default AdminManageProperties;