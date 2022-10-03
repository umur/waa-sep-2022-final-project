import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllOwnersProperty} from "../../store/ownerPropertySlicer";

export default function PropertyDetailsPage({ property, show, handleClose,id }) {

// console.log("what ",property);

    return(
        <div>
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Owners Property More Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    </Modal.Body>
                    <Modal.Body>
                        <form>
                            <div >
                                <div > Type: {property.type}</div>
                                <div > Number of bedrooms: {property.numberOfRooms}</div>
                                <div > Number of bathrooms: {property.numberOfBathrooms}</div>
                                <div > Location: {property.location}</div>
                                <div > Price: {property.price}</div>
                                <div > View: {property.views}</div>
                                <div > Construction Year: {property.constructionYear}</div>
                                <div > Picture One: {property.picture}</div>
                                <div > Picture two: {property.picture}</div>

                                    </div>



                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </>
        </div>
    )
}