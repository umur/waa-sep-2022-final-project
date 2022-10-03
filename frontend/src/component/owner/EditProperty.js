import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import {useDispatch} from "react-redux";
import {saveNewRequest} from "../../store/RequestSlicer";

export default function EditProperty({ show, handleClose, id }) {

    console.log('conect');
    const [request, setRequest] = useState('default');
    const dispatch = useDispatch();

    const onRequestChanged = (e) =>{
        setRequest(e.target.value);

    }
    const userId = 0;
    const onSaveRequest = () => {
        //TODO axios post to list of request
        console.log("save request");

        const requestBody ={
            propertyId : id,
            comment:request
        }
        console.log(id);
        setRequest('default');
        dispatch(saveNewRequest(requestBody));

        //TODO change the button to cancel request

    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Request form</Modal.Title>
                </Modal.Header>
                <Modal.Body></Modal.Body>
                <Modal.Body>
                    <form>
                        <input
                            type='text'
                            value={request}
                            onChange={onRequestChanged }
                            style={{ width: "300px" }}
                        />
                    </form>
                </Modal.Body>
                <Modal.Body></Modal.Body>
                <Modal.Body></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={ () => {onSaveRequest(); handleClose();}}>

                        Submit Request
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
