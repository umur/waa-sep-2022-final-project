import React, {createRef, useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import PropertyEditPage from "./PropertyEditPage";
import RequestProperty from "../customer/RequestProperty";
import PropertyDetailsPage from "./PropertyDetailsPage";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllOwnersProperty} from "../../store/ownerPropertySlicer";
import OwnerSingleProperty from "./OwnerSingleProperty";

export default function EditProperty(props) {
    const [show, setShow] = useState(false);

    const handleEdit = () => setShow(false);

    const handleEditClick = () => setShow(true);

    const value = useSelector((state) => state.ownersProperty);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllOwnersProperty());
    }, []);

    const ownerProperties = value.properties


    console.log('myyyy', ownerProperties[0]);

    return (
        <div>
            <div>
                <p>


                    <Button style={{padding: "9px", margin: "20px"}} variant="primary" onClick={handleEditClick}>
                        Edit Property</Button>
                </p>
            </div>
            <div>{ownerProperties.map((property) =>
                    <PropertyEditPage property={property} show={show} handleClose={handleEdit} id={props.id}/>
                // <PropertyDetailsPage property = {property} show={show} handleClose={handleClose} id={props.id} />
            )}</div>

            {/*<PropertyEditPage show={show} handleClose={handleEdit} id={props.id}/>*/}
        </div>
    );
}

export function MoreDetails({property}) {

    const [show, setShow] = useState(false);
    const valeRef = createRef('default');
    const handleClose = function () {
        setShow(false);
    };
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllOwnersProperty());
    }, []);

    console.log('my', property );

    const handleFavListClick = () => setShow(true);

    return (
        <div>
            <div>
                <p>
                    <Button style={{padding: "9px", margin: "20px"}} variant="primary" onClick={handleFavListClick}>
                        More Details</Button>
                </p>
            </div>
            <div>
                <PropertyDetailsPage property={property} show={show} handleClose={handleClose} id={property.id}/>
            </div>


        </div>
    );
}
