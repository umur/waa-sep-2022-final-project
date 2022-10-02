import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const OwnerDashboard = () => {
  const init = [];
  const [props, setProps] = useState(init);

  const getOwnerProperties = async () => {
    let token = JSON.parse(localStorage.getItem("token"));

    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/properties/ownerprops`,

        {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        }
      );

      
      setProps([...init,...response.data]);
      console.log(props);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = () => {};

  useEffect(() => {
    getOwnerProperties();
  }, []);

  return (
    <div className="h-screen flex bg-gray-bg1">
      <div className="border-b font-bold p-5  bg-gray-300 w-full sticky top-0">
        <h1 className="inline-block">owner</h1>
        <div className="inline-block float-right">
          <Link
            className="px-6 py-2 text-blue-100 no-underline bg-blue-500 rounded hover:bg-blue-600 hover:underline hover:text-blue-200 m-2"
            to="/add"
          >
            add property
          </Link>
        </div>
      </div>
      <div className="border-b font-bold p-5  bg-gray-300 w-full sticky top-0">
        {props.map((t) => {
          return (
            <div className="border-solid border-2 border-indigo-600 rounded-md m-4 w-55 inline-block h-64 p-3.5">
              <div> Name: {t.propertyName} </div>
              <div> Type: {t.propertyType}</div>
              <div> N bad Room: {t.noOfBedRoom}</div>
              <div> N Bath room: {t.noOfBathRoom}</div>
              <div> RentAmount: {t.rentAmount}</div>
              <div> Address: {t.address.street}</div>
              <div>
                <button
                  onClick={handleDelete}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OwnerDashboard;
