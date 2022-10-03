import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from "react-redux";
import { feachAllPropertyWithImage } from "./../../store/propertySlicerAdmin";
import React, { useEffect } from "react";

function AdminDashBoardProperties() {

  const {properties, status} = useSelector((state) => state.propertyAdmin);

  console.log(properties);

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(feachAllPropertyWithImage());

  }, []);

  return (
    <Row xs={1} md={5} className="g-4">
      {Array.from(properties, data => (

        <Col >

          <Card>
            <Card.Img variant="top" style={{height:"120px", width:"170px"}} src= {data.image}/>
            <Card.Body>
              <Card.Title style={{fontSize:"22px", fontWeight:"bold"}}>${data.price}</Card.Title>
              <Card.Text style={{fontSize:"12px"}}>
                <b>Number of Rooms: </b>{data.numberOfRoom} , <b>Year of Build: </b>{data.yearOfBuild}, <b>Size:</b> {data.size} <b>sqft</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default AdminDashBoardProperties;