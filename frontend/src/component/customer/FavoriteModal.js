import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {useDispatch, useSelector} from "react-redux";

import {fetchCustomer} from "../../store/SingleCustomerSlicer";

import {saveNewFavList} from "../../store/addNewFavListSlicer";

export default function FavoriteModal({ show, handleClose,id }) {
  const [favorit, setFavorit] = useState({
    id: "default",
    name: "default",
  });
  const [newFavorite, setNewFavorite] = useState("default");
  const [selectedFav, setSelectedFav] = useState();

  const favoriteList = useSelector((state) => state.singleCustomer);
  const favoriteListOfCus = favoriteList.customers;




  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomer());
  }, []);

  const onAddFavoriteList = (e) => {
    const requestBody = {
      name: selectedFav ,
      propertyId: id,
    };

    dispatch(saveNewFavList(requestBody));
  };

  const handleFavListFieldOnChange = (e) => {
    setNewFavorite(e.target.value);
  }

  const onselectFav = (e) => {
    setSelectedFav(e.target.value);

  };

  const addNewFavoriteList = (fav) => {

    setNewFavorite('default');
  };
  const unCheck = () => {
    let allRadioButtons = document.querySelectorAll('radioButtons');
    // console.log('radioButtons', allRadioButtons);
    allRadioButtons.forEach(value => value.checked == false);
  }

  const onSaveChanges = () => {

    const requestBody = {
      name: selectedFav || newFavorite,
      propertyId: id,
    };

    dispatch(saveNewFavList(requestBody));

    unCheck();
  }


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Favorite List</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div onChange={onselectFav}>
            {favoriteListOfCus.map((fav) =>

                <div className="radio">
                  <label>
                    <input type="radio" className='radioButtons' value={fav.name} checked={selectedFav === fav.name} name={fav.name}/>
                    {fav.name}
                  </label>
                </div>

            )}
          </div>
        </Modal.Body>
        <Modal.Body>
          <form>
            <div class="container text-center">
              <div class="row">
                <div class="col-sm-8">
                  <input
                    type="text"
                    value={newFavorite}
                    onChange={handleFavListFieldOnChange}
                    style={{ width: "300px" }}
                  />
                </div>
                <div class="col-sm-4">
                  {/*<Button variant="primary" onClick={onAddFavoriteList}>*/}
                  {/*  add*/}
                  {/*</Button>*/}
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick= { () => {onSaveChanges(); handleClose();}}>

            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
