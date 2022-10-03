import { Popover } from "bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FavoriteModal from "./FavoriteModal";
import {Request} from "./PropertyNavigate";
import RequestProperty from "./RequestProperty";

export default function OnClickFavoriteList() {

  console.log("FavoriteList");

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <FavoriteModal
      // setShow={setShow}
      show={show}
      handleClose={handleClose}
      // handleShow={handleShow}
    />
  );
}
export function OnClickRequest() {

  console.log("Request");
  const [request, setRequest] = useState(true);

  const handleCloseRequest = () => setRequest(false);
  const handleRequestClick = () => setRequest(true);

  return (
      <RequestProperty
          // setShow={setShow}
          request={request}
          handleCloseRequest={handleCloseRequest}
          // handleShow={handleShow}
      />
  );
}
export function OnClickClose() {
  //   return <div>Request for Rent/Buy </div>;
  console.log("closed");
  <Link to={"/dashboard"}></Link>;
}
