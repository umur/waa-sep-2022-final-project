import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Home.css";
import axios from "axios";

import Button from "react-bootstrap/Button";
import AuthContext from "../../AuthContext";
import Modal from "react-bootstrap/Modal";

const Home = () => {
  const auth = useContext(AuthContext);

  const [propertyName, setPropertyName] = useState([]);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (data) => {
    console.log(propertyName);
    axios
      .post(process.env.REACT_APP_API_URL + "/request", {
        message: message,
        propertyId: data.id,
      })
      .then((res) => {
        console.log("property", res.data);
        setPropertyName(res.data.reverse());
      });
    handleClose();
  };
  function loadProperty() {
    axios.get(process.env.REACT_APP_API_URL + "/properties").then((res) => {
      console.log("property", res.data);
      setPropertyName(res.data.reverse());
    });
  }

  const hasRoleCustomer = () => {
    try {
      if (auth.user.realm_access.roles.includes("Customer")) {
        return true;
      }
    } catch (error) {
      return false;
    }
  };

  const hasRoleOwner = () => {
    try {
      if (auth.user.realm_access.roles.includes("Owner")) {
        return true;
      }
    } catch (error) {
      return false;
    }
  };
  const hasRoleAdmin = () => {
    try {
      if (auth.user.realm_access.roles.includes("Admin")) {
        return true;
      }
    } catch (error) {
      return false;
    }
  };

  const populateSubmitRequestButton = (data) => {
    let submitRequest = "";
    if (hasRoleCustomer()) {
      submitRequest = (
        <>
          <Button variant="primary" onClick={handleShow}>
            Request
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Submit request</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={() => handleSubmit(data)}>
                Send Request
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
    return submitRequest;
  };

  const populateEditDeleteButton = (data) => {
    let buttons = "";
    console.log(data.owner.id);
    console.log(auth.user);
    if ((hasRoleOwner() || hasRoleAdmin()) && data.owner.id === auth.user.sub) {
      buttons = (
        <>
          <Link
            to={`/editProperty/${data.id}`}
            type="button"
            class="btn btn-sm btn-outline-secondary"
          >
            Edit
          </Link>
          <Link
            onClick={() => DeleteProperty(data.id)}
            type="button"
            class="btn btn-sm btn-outline-secondary"
          >
            Delete
          </Link>
        </>
      );
    }
    return buttons;
  };

  function favouriteProperty(id) {
    axios
      .post(process.env.REACT_APP_API_URL + "/favorite", {
        propertyId: id,
      })
      .then((res) => {
        console.log("property", res.data);
        loadProperty();
      });
  }

  const populateFavouriteButton = (data) => {
    let favouriteButton = "";
    if (hasRoleCustomer()) {
      favouriteButton = (
        <>
          <Link
            onClick={() => favouriteProperty(data.id)}
            type="button"
            class="btn btn-sm btn-outline-secondary"
          >
            Favourite
          </Link>
        </>
      );
    }
    return favouriteButton;
  };

  useEffect(() => {
    loadProperty();
  }, []);

  function DeleteProperty(id) {
    axios
      .delete(process.env.REACT_APP_API_URL + `/properties/${id}`)
      .then(loadProperty());
  }

  return (
    <div className="list_cart">
      {/* {console.log(propertyName)} */}

      <div class="container album py-5 bg-light list_card">
        <h2 className="text-center fw-lighter">Property Management Portal</h2>
        <br />
        <div class="row row-cols-3 row-cols-sm-2 row-cols-md-3 g-3 ">
          {propertyName.map((data, index) => {
            return (
              //  <div class="album py-5 bg-light">

              <div class="col">
                <div class="card shadow-sm">
                  {/* <svg class="bd-placeholder-img card-img-top " width="100%" height="225" xmlns="http://www.w3.org/2000/svg" 
                                  role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"> */}
                  <title>{data.propertyName}</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  {/* <text class="text-center" x="50%"  y="50%" fill="#eceeef" dy=".3em">Thumbnail</text> */}
                  <img
                    src={data.images.length > 0 ? data.images[0].imgUrl : ""}
                    alt="..."
                    class="img-thumbnail"
                  />

                  {/* </svg> */}

                  <div class="card-body">
                    <div class="fs-4">
                      <strong>${data.rentAmount} </strong>
                    </div>
                    <div>
                      {data.numberOfRooms} bds | {data.numberOfBathRooms} ba |{" "}
                      {data.squareFeet} sqft- {data.propertyType}
                    </div>
                    <p class="card-text">
                      {data.address} {data.street}, {data.city}, {data.zip}
                    </p>

                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <Link
                          to={`/property/${data.id}`}
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </Link>
                        {/* <Link
                          to={`/editProperty/${data.id}`}
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </Link>
                        <Link
                          onClick={() => DeleteProperty(data.id)}
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          Delete
                        </Link> */}
                        {populateEditDeleteButton(data)}
                        {populateSubmitRequestButton(data)}
                        {populateFavouriteButton(data)}
                      </div>
                      {/* <small class="text-muted"> 9 mins</small> */}
                    </div>
                  </div>
                </div>
              </div>

              //  </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;
