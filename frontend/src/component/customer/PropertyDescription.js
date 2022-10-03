import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import PropertyImages from "./PropertyImages";
import { BigPropertyImages } from "./PropertyImages";

import { useDispatch, useSelector } from "react-redux";
import {  fetchProperty } from "../../store/propertySlicer";

export default function PropertyDescription() {
  const propertyState = useSelector((state) => state.property);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProperty());
  }, []);

  return (
    <div>
      <div>
        <div class ='row'>

          <div class="col-sm-6">
            <div>
              {propertyState.status == "pending" ? (
                <div>Loading</div>
              ) : (
                <div class="h5  "> Price :${propertyState.products?.price}</div>
              )}
            </div>
            
            <div>
              {propertyState.status == "pending" ? (
                <div>Loading</div>
              ) : (
                <div> numberOfRooms:{propertyState.products?.numberOfRooms}</div>
              )}
            </div>
            <div>
              {propertyState.status == "pending" ? (
                <div>Loading</div>
              ) : (
                <div>
                  <p>numberOfBathrooms:{propertyState.products?.numberOfBathrooms}</p>
                </div>
              )}
            </div>
          </div>

          <div class="col-sm-6">
            <div >
              {propertyState.status == "pending" ? (
                <div>Loading</div>
              ) : (
                <div> Size :{propertyState.products?.size}</div>
              )}
            </div>
        
            <div>
              {propertyState.status == "pending" ? (
                <div>Loading</div>
              ) : (
                <p>Views:{propertyState.products?.views}</p>
              )}
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
