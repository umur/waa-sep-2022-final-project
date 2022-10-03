import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {editProperty} from "../../store/editPropertySlicer";



export default function PropertyEditPage({ property, show, handleClose,id }) {
    // console.log('tes', property)
    const initialValue = {
        numberOfBedrooms:property.NumberOfBedrooms,
        numberOfBathrooms:property.NumberOfBedrooms,
        location:property.Location,
        price:property.price,
        size:property.size,

    }
const value = useSelector((state) => state.editProperty)
    // console.log(initialValue.size);
    const[prop, setProp] = useState(initialValue);
    // console.log('props',prop);

    const onEditProperty = (e) => {
        setProp({
            ...prop,
            [e.target.name]: e.target.value
        });

    }
    const dispatch = useDispatch();
    const handleSave = () => {
        dispatch(editProperty(prop));
    }


    return(
        <div>
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Favorite List</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    </Modal.Body>
                    <Modal.Body>
                        <form>

                            <div >
                                numberOfBedrooms :<input
                                type="text"
                                value={initialValue.numberOfBedrooms}
                                onChange={onEditProperty}
                                name = "numberOfBedrooms"
                                style={{ width: "140px" }}
                            />
                                <div>
                                    numberOfBathrooms <input
                                    type="text"
                                    value={initialValue.numberOfBedrooms}
                                    onChange={onEditProperty}
                                    name="numberOfBathrooms"
                                    style={{ width: "140px" }}
                                />
                                </div>
                                <div>
                                    location <input
                                    type="text"
                                    value={initialValue.location}
                                    onChange={onEditProperty}
                                    name="location"
                                    style={{ width: "230px" }}
                                />
                                </div>
                                <div>
                                    price <input
                                    type="text"
                                    value={initialValue.price}
                                    onChange={onEditProperty}
                                    name ="price"
                                    style={{ width: "255px" }}
                                />
                                </div>
                                <div>
                                    size <input
                                    type="text"
                                    value={initialValue.size}
                                    onChange={onEditProperty}
                                    name = 'size'
                                    style={{ width: "263px" }}
                                />
                                </div>
                                    </div>
                                    <div >

                                    </div>


                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button  variant="primary" onClick={handleSave}>
                            Save
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Close
                        </Button>


                    </Modal.Footer>
                </Modal>
            </>
        </div>
    )
}