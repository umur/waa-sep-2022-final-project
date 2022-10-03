import React, {createRef, useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FavoriteModal from "./FavoriteModal";
import RequestProperty from "./RequestProperty";

export default function FavoriteList(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleFavListClick = () => setShow(true);

  return (
    <div>
      <div>
        <p>
          <Button variant="primary" onClick={handleFavListClick}>
            Add to Favorite List
          </Button>
        </p>
      </div>

      <FavoriteModal show={show} handleClose={handleClose} id={props.id}/>
    </div>
  );
}
export function Request(props) {
    const [show, setShow] = useState(false);
    const valeRef = createRef('default');
    const handleClose = function () {
        setShow(false);


    } ;


    const handleFavListClick = () => setShow(true);

    return (
        <div>
            <div>
                <p>
                    <Button variant="primary" onClick={handleFavListClick}>
                        Request for Rent/Buy
                    </Button>
                </p>
            </div>

            <RequestProperty show={show} handleClose={handleClose} id={props.id} />
        </div>
    );
}
