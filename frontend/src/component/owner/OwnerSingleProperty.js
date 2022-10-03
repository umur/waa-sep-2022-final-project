import React, {useEffect, useState,useNavigate} from "react";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import {useDispatch, useSelector} from "react-redux";
import {deleteOwnersProperty, fetchAllOwnersProperty} from "../../store/ownerPropertySlicer";

import EditProperty, {MoreDetails} from "./OwnerPropertyNavigate";


export default function OwnerSingleProperty(props) {



    const value = props.property;

    const dispatch = useDispatch();


    const ownerProperties = value.properties

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleFavListClick = () => setShow(true);


    const onClickEdit = () => {
        console.log("edit");


    }
    const onClickDelete = () => {
        console.log("Delete");

        dispatch(deleteOwnersProperty(value.id))
    }
    const onClickDetails = () => {
        console.log("Details");
    }
    return (
        <div>
            <Card border="primary" style={{padding: "9px"}}>

                <Card.Body>
                    {/*<Card.Title>Primary Card Title</Card.Title>*/}
                    <Card.Text>

                        <div className="d-flex justify-content-start">

                            <div className="container text-center">
                                <div className="row">
                                    <div className="col">
                                        <div style={{
                                            fontSize: "18px",
                                            textAlign: "left",
                                            fontWeight: "bold"
                                        }}>Type:{value.type}</div>
                                        <div style={{
                                            fontSize: "18px",
                                            textAlign: "left",
                                            fontWeight: "bold"
                                        }}>Location:{value.location}</div>
                                        <div style={{
                                            fontSize: "18px",
                                            textAlign: "left",
                                            fontWeight: "bold"
                                        }}>NumberOfBathrooms:{value.numberOfBathrooms}</div>
                                        <div style={{
                                            fontSize: "18px",
                                            textAlign: "left",
                                            fontWeight: "bold"
                                        }}>NumberOfBathrooms: {value.numberOfRooms}</div>
                                        <div style={{
                                            fontSize: "18px",
                                            textAlign: "left",
                                            fontWeight: "bold"
                                        }}>Views: {value.views}</div>

                                        <br/>
                                    </div>

                                    <div className="col">
                                        <div style={{
                                            fontSize: "18px",
                                            textAlign: "left",
                                            fontWeight: "bold"
                                        }}>Price {value.price}</div>
                                        <div style={{fontSize: "18px", textAlign: "left", fontWeight: "bold"}}>Size
                                            : {value.size}</div>
                                    </div>
                                    <div className="col">
                                        <img
                                            className="img1"
                                            src={value.picture}
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
                            <div class="container text-center">
                                <div class="row justify-content-md-center">

                                    <div class="col col-lg-2"><EditProperty id={value.id}/></div>

                                    <div class="col-md-auto"><Button style={{padding: "9px", margin: "20px"}}
                                                                     variant="primary" onClick={onClickDelete}>
                                        Delete Property</Button></div>

                                    <div class="col col-lg-2"><MoreDetails property={value}/></div>

                                </div>

                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}


