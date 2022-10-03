import React, { useState } from "react";
import { HeartFillIcon } from "@primer/octicons-react";
import "./propertycard.css";
import { MDBRipple } from "mdb-react-ui-kit";

let PropertyCard = ({ property }) => {
  const [like, setLike] = useState(false);

  const onClick = () => {
    setLike(!like);
  };

  return (
    <div class="card" style={{ width: "30%", margin: "20px 15px" }} className='bg-image hover-zoom'>
      <div style={{ height: "200px" }}>
    
        <img
          class="card-img-top"
          style={{ height: "100%", position: "center" }}
          src={property.image}
          alt="Card image cap"
        />
      </div>

      <div class="card-body">

        <div style={{ fontWeight: "bold",marginTop:"20px",height:"30px" ,display:"flex",justifyContent:"space-between"}}>
          <div>$ {property.price}</div>
          <div style={{}} className="heart-icon" onClick={() => onClick()}>
            <HeartFillIcon size={16} fill={`${like ? "red" : "gray"}`} />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "11px",
            justifyContent: "space-between",
          }}
        >
          <div>{property.numberOfRoom} bds </div>{" "}
          <div style={{ height: "12px", borderLeft: "1px solid gray" }}></div>
          <div> 3 ba </div>
          <div style={{ height: "12px", borderLeft: "1px solid gray" }}></div>
          <div>{property.size} sqft -</div>
          <div>For sale by owner</div>
        </div>
        <div style={{ marginLeft: "-57%", fontSize: "12px" }}>
          {property["address"].state} {property["address"].street},{" "}
          {property["address"].zipcode}{" "}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
