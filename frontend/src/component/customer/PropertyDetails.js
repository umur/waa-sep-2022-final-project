import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";

import UncontrolledExample from "./Slider";
import OnClickFavoriteList, {
  OnClickRequest,
  OnClickClose,
} from "./OnButtonClick";
import {  fetchProperty,fetchAllProduct } from "../../store/propertySlicer";
import FavoriteList, { Request } from "./PropertyNavigate";
import PropertyDescription from "./PropertyDescription";
import {Link, useParams} from "react-router-dom";
import PropertyDetailDisplay from "./PropertyDetailDisplay";


export default function PropertiesDetail() {
  const propertyState = useSelector((state) => state.property);
  console.log(propertyState.products);

  const dispatch = useDispatch();

    const {id} = useParams();
    console.log(id);

  useEffect(() => {
    dispatch(fetchProperty(id));
  }, []);

  return (
    <div>
      <div class="  " style={{display: 'flex',
    alignItems: 'self-end',
    flexDirection: 'column-reverse'
}}  >
  <Link to={"/dashboard"}>
        <button 
          type="button"
          class="btn-close "
          aria-label="Close"
          onClick={OnClickClose}
        ></button>
        </Link>
      </div>
      
      <div class="container" style ={{minHeight: 100 + 'vh', marginTop:70+'px'}} >
      <div class="d-flex justify-content-start align-items-center row ">
        <div class="col-sm-7" >
          {" "}
          <UncontrolledExample />{" "}
        </div>

        <div class="d-flex justify-content-between row col-sm-5 ">
          <div class="col-sm-8">
            <PropertyDescription />
          </div>
          <div class="col-sm-4">
            <FavoriteList id ={id} />
            <Request id = {id}/>

          </div>
        </div>

      </div>
          <div >
           <div class="position-absolute top-100 start-50 translate-middle">
               <  PropertyDetailDisplay/>
           </div>
          </div>
    </div>

    </div>
  );
}
