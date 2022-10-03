
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";

import {fetchAllFavorite} from "../../store/favoritePropertySlicer";
import Properties from "./Properties";

export default function Favorites() {
//TODO fetch and display it here.
  const propertyList = useSelector((state) => state.favorite);
  const properties = propertyList.favorite;





  const dispatch = useDispatch();

    useEffect(() => {
    dispatch(fetchAllFavorite());

  }, []);

  return (

    <div >
      {properties.map((prop) =>

        <Properties properties={prop}/>

      )}


    </div>
  );
}
