import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from 'react-router-dom'
import {deleteOwnersProperty, fetchAllOwnersProperty} from "../../store/ownerPropertySlicer";

import EditProperty, {MoreDetails} from "./OwnerPropertyNavigate";


export default function OwnerFilteredProperty (props) {


    const value = useSelector((state) => state.ownerSingleProperty);
    console.log(value);
    const propertyArray = value.properties;
    console.log('id is ',   [0].id);


    const param = useParams()
    console.log("parameter is" , param.id)
    const filterById =  propertyArray.filter((property)=>property.id == param.id)
    console.log("Hello Done", filterById[0])


    return(

        <div >
            <div> <h2> Filterd Result </h2> </div>
            <h3> You have filterd the property with Id # {filterById[0].id}</h3>
            <Card border="primary" style={{ width: '95rem', padding:"9px", marginLeft:"110px"}}>

                <Card.Body>
                    {/*<Card.Title>Primary Card Title</Card.Title>*/}
                    <Card.Text>

                        <div className="d-flex justify-content-start">

                            <div className="container text-center">
                                <div className="row">
                                    <div className="col">
                                        <div style={{fontSize: "18px",
                                            textAlign: "left",
                                            fontWeight: "bold"
                                        }}>NumberOfBathrooms:{filterById[0].type}</div>
                                        <div style={{
                                            fontSize: "18px",
                                            textAlign: "left",
                                            fontWeight: "bold"
                                        }}>NumberOfBathrooms:{filterById[0].location}</div>
                                        <div style={{
                                            fontSize: "18px",
                                            textAlign: "left",
                                            fontWeight: "bold"
                                        }}>NumberOfBathrooms:{filterById[0].numberOfBathrooms}</div>
                                        <div style={{
                                            fontSize: "18px",
                                            textAlign: "left",
                                            fontWeight: "bold"
                                        }}>NumberOfBathrooms: {filterById[0].numberOfRooms}</div>
                                        <div style={{
                                            fontSize: "18px",
                                            textAlign: "left",
                                            fontWeight: "bold"
                                        }}>Views: {filterById[0].views}</div>

                                        <br/>
                                    </div>

                                    <div className="col">
                                        <div style={{
                                            fontSize: "18px",
                                            textAlign: "left",
                                            fontWeight: "bold"
                                        }}>Price {filterById[0].price}</div>
                                        <div style={{fontSize: "18px", textAlign: "left", fontWeight: "bold"}}>Size
                                            : {filterById[0].size}</div>
                                    </div>
                                    <div className="col">
                                        <img
                                            className="img1"
                                            src={filterById[0].picture}
                                            alt="Property1"
                                            width="450"
                                            height="250"
                                        />
                                    </div>
                                </div>

                            </div>
                            <div>
                            </div>
                            <br/>
                        </div>
                        <div>
                            <div class="container text-center" >
                                <div class="row justify-content-md-center">

                                   <div class="col col-lg-2"  > <EditProperty id= {value.id}/></div>

                                    <div class="col-md-auto"><Button style={{padding: "9px", margin: "20px"}} variant="primary">
                                        Delete Property</Button></div>

                                    {/* <div class="col col-lg-2"> <MoreDetails id= {value.id}/> </div> */}

                                </div>

                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}


