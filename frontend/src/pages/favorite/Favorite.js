import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./favorite.css";

const Favorite = () => {
  const [favoriteList, setFavoriteList] = useState([]);

  function loadFavorite() {
    axios.get(process.env.REACT_APP_API_URL + "/favorite").then((res) => {
      setFavoriteList(res.data.reverse());
    });
  }

  useEffect(() => {
    loadFavorite();
  }, []);

  function DeleteFavorite(id) {
    axios.delete(process.env.REACT_APP_API_URL + `/favorite/${id}`).then(() => {
      const updatedFavorite = favoriteList.filter((f) => f.id !== id);
      setFavoriteList(updatedFavorite);
    });
  }

  return (
    <div className="list_cart">
      <div class="container album py-5 bg-light list_card">
        <h2 className="text-center fw-lighter">My favorite list</h2>
        <br />
        <div class="row row-cols-3 row-cols-sm-2 row-cols-md-3 g-3 ">
          {favoriteList.map((data, index) => {
            return (
              <div class="col">
                <div class="card shadow-sm">
                  <title>{data.propertyName}</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>

                  <img
                    src={data.images.length ? data.images[0].imgUrl : ""}
                    alt="..."
                    class="img-thumbnail"
                  />

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

                        <Link
                          onClick={() => DeleteFavorite(data.id)}
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          Remove favorite
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Favorite;
