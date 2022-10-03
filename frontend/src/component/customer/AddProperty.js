import { current } from "@reduxjs/toolkit";
import { useState } from "react";
import { Row, Col, Container, Form, Button, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerProperty } from "../../store/propertySlicer";
const Addproperty = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    propertyType: "",
    numberOfBedrooms: "",
    dateOfConstraction: "",
    size: "",
    photo: [],
    address:{
      state: "",
      city: "",
      street: "",
      zipCode: "",
    }
  });

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
  
    const dataToPost= {
      propertyType: data.propertyType,
      numberOfBedrooms: data.numberOfBedrooms,
      dateOfConstraction: data.dateOfConstraction,
      size: data.size,
      photo: [],
      address:{
        state: data.state,
        city: data.city,
        street: data.street,
        zipCode: data.zipCode,
      }
    }

    dispatch(registerProperty(dataToPost))
    
    
  };

  

  // const handleTextChange = (e) => {
  //   e.preventDefault();
  //   const currentValue = { [e.target.name]: e.target.value };

  //   if (e.target.name.includes("location")) {
  //     setFormData({ address: { ...formData.address, ...currentValue } });
  //   } else {
  //     setFormData({ ...formData, ...currentValue });
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log({ formData });
  //   console.log("submit button clicked");

  //   const payload = {
  //     ...formData,
  //     location: address,
  //   };
  // };

  return (
    <div>
      <container>
        <h2>Register new Property</h2>
        <Form style={{ padding: 12 }} onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Col md={3}>
                <Form.Label>Property Type</Form.Label>
              </Col>
              <Col md={9}>
                <Form.Control
                  type="text"
                  placeholder="property type"
                  {...register("propertyType")}
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Col md={3}>
                <Form.Label>Number of Bedrooms</Form.Label>
              </Col>
              <Col md={9}>
                <Form.Control
                  type="number"
                  min="0"
                  placeholder="3"
                  {...register("numberOfBedrooms")}
        
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Col md={3}>
                <Form.Label>Date of Construction</Form.Label>
              </Col>
              <Col md={9}>
                <Form.Control
                  type="date"
                  placeholder="date"
                  {...register("dateOfConstraction")}
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Col md={3}>
                <Form.Label>Size</Form.Label>
              </Col>
              <Col md={9}>
                <Form.Control
                  type="number"
                  min="0"
                  placeholder="size"
                  {...register("size")}
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <h3>Location</h3>
            <Row>
              <Col md={3}>
                <Form.Label>State</Form.Label>
              </Col>
              <Col md={9}>
                <Form.Control
                  type="text"
                  placeholder="state"
                  {...register("state")}
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Col md={3}>
                <Form.Label>City</Form.Label>
              </Col>
              <Col md={9}>
                <Form.Control
                  type="text"
                  placeholder="NewYork"
                  {...register("city")}
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Col md={3}>
                <Form.Label>Street</Form.Label>
              </Col>
              <Col md={9}>
                <Form.Control
                  type="text"
                  placeholder="e.g 1000 N 4th st"
                  {...register("street")}
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Col md={3}>
                <Form.Label>Zip Code</Form.Label>
              </Col>
              <Col md={9}>
                <Form.Control
                  type="text"
                  placeholder="e.g 52557"
                  {...register("zipCode")}
                />
              </Col>
            </Row>
          </Form.Group>
          <h3>Upload photo</h3>
          <div class="form-group">
            <label for="exampleFormControlFile1"> </label>
            <input
              type="file"
              class="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>

          <Button variant="primary" type="submit" >
            Submit
          </Button>
        </Form>
      </container>
    </div>
  );
};

<Form.Group className="mb-3" controlId="formBasicEmail">
  <Row>
    <Col md={3}>
      <Form.Label>Address</Form.Label>
    </Col>
    <Col md={9}>
      <Form.Control type="text" placeholder="" />
    </Col>
  </Row>
</Form.Group>;

export default Addproperty;
