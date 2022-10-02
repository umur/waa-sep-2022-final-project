import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import "./viewProperty.css";
function ViewProperty() {
  const { id } = useParams();
  const [property, setProperty] = useState();

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + `/properties/${id}`)
      .then((res) => {
        setProperty(res.data);
      });
  }, []);

  return (
    <div className="property--card">
      {property ? (
        <div class="card shadow-sm shadow-lg  ">
          <div className="mt-5 mb-5">
            <div class="text-center fs-2 ">{property.propertyName}</div>
            <br />

            <div class="row">
              <div class="col text-center">
                <img
                  src={
                    property.images.length > 0 ? property.images[0].imgUrl : ""
                  }
                  class="img-thumbnail"
                  width="400"
                  height="400"
                  alt="property image"
                ></img>
              </div>
              <div class="col">
                <div>
                  <strong>Rent Amount: </strong> ${property.rentAmount}
                </div>

                <div>
                  <strong>Square Feet: </strong>
                  {property.squareFeet} sqft
                </div>

                <div>
                  <strong>Number Of Rooms: </strong>
                  {property.numberOfRooms}
                </div>

                <div>
                  <strong>Number Of Bathrooms: </strong>
                  {property.numberOfBathRooms}
                </div>

                <div>
                  <strong>Rented Date: </strong>
                  {property.rentedDate}
                </div>

                <div>
                  <strong>Property Type: </strong>
                  {property.propertyType}
                </div>

                <div>
                  <strong>Home Type: </strong>
                  {property.homeType}
                </div>

                <div>
                  <strong>Address: </strong>
                  {property.address} {property.street}, {property.city},{" "}
                  {property.zip}
                </div>
              </div>
            </div>

            <br></br>
            <div>
              <div class="text-center">
                {" "}
                <strong>Description:</strong>
              </div>
              <p class="text-center"> {property.description}</p>
            </div>
            <div className="text-center mt-5">
              <Link
                to={"/home"}
                type="button"
                class="btn btn-outline-secondary"
              >
                Back To Home
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default ViewProperty;
