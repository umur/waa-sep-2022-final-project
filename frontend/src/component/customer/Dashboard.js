import axios from "axios";
import { useState,useEffect } from "react";
import { Row, Col, Container, Form, Button, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";

 import { useDispatch } from "react-redux";
import propertyDetails from "../../img";
import { filterProperty } from "../../store/propertySlicer";
import PropertyCard from "../cards/PropertyCard";
//import data from "../../data.json"
import myJson from "../../data.json" 


export default function Home() {
  const [filterData, setFilterData] = useState({});
  const [data, setData] = useState([]);
  const dispatch=useDispatch();

  useEffect(()=>{

   const dat=myJson["properties"].allPropertiesWithImg;
    setData(dat)



  },[filterData])
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
     
    setFilterData(data)
   

    dispatch(filterProperty(data))
  };

  

  return (
    <Container>
      <Row>
        <Col md={{ offset: 4, span: 4 }} xs={{ offset: 4, span: 4 }}>
          Find it. Tour it. Own it.
        </Col>
      </Row>

      <Row>
        <Col md={10}>
          <Container>
          {

            filterData.length>0 ? <h1>results found</h1> :   <div style={{display:"flex", width:"100%",flexWrap:"wrap"}}>
            {data.map((property) => {
              return (
              

                 <PropertyCard property={property} />
                
                
              );
            })}
          </div>


          }
          
          </Container>
        </Col>

        <Col md={2}>
          <div className="position-fixed">
            <form style={{ padding: 12 }} onSubmit={handleSubmit(onSubmit)} >
              <h3>Filter by</h3>
              
               
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Row>
                  <Col md={3}>
                    <Form.Label>Price</Form.Label>
                  </Col>
                  <Col md={9}>
                    <Form.Control type="number" min="0" placeholder="Price"   {...register("price")}/>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Row>
                  <Col md={3}>
                    <Form.Label>Date</Form.Label>
                  </Col>
                  <Col md={9}>
                    <Form.Control type="date"   {...register("date")} />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Row>
                  <Col md={3}>
                    <Form.Label>Size</Form.Label>
                  </Col>
                  <Col md={9}>
                    <Form.Control type="number" min="0" placeholder="size"    {...register("size")}/>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Row>
                  <Col md={3}>
                    <Form.Label>Location</Form.Label>
                  </Col>
                  <Col md={9}>
                    <Form.Control type="text"      {...register("location")} />
                  </Col>
                </Row>
              </Form.Group>
              <div style={{width:"100%",display:"flex",justifyContent:"center" ,marginLeft:"35px"}}>
              <Button variant="primary" type="submit" >
              Submit
            </Button>
              </div>
        
            </form>

            <div className="position-fixed" style={{ margin:"10px" ,border:"1px solid gray",borderRadius:"10px" ,padding:"10px"}}>
              <div style={{ padding: 7 }}>
                <h3 style={{color:"gray"}}>About <span style={{color:"orange"}}>Us</span> </h3>
                <p style={{lineHeight:"25px",fontSize:"13px"}}>
                  {" "}
                  As the most-visited real estate website in the United States, Zillow and its affiliates offer customers an on-demand experience for selling, buying, renting and financing with transparency and nearly seamless end-to-end service. Zillow Home Loans, our affiliate
                   lender.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
