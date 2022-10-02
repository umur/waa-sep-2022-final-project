import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

const RentProperty = () => {
  const select =useSelector(state=>state)

  const handleRent = async (e) => {
    e.preventDefault();
    const credentials = {
      amount: e.target.elements.amount?.value,
      date: e.target.elements.date?.value,
    };

    
    console.log(select.propId.id)
    const id=select.propId.id

    let token = JSON.parse(localStorage.getItem("token"));
    try {
      const response = await axios.post(
        `http://localhost:8080/api/v1/properties/${id}/rents`,
        credentials,
        {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        }
      );

      if (response.status == 200) Navigate("/");
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  return (
    <div className="h-screen flex bg-gray-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Rent the Property
        </h1>

        <form onSubmit={handleRent}>
          <div>
            <label>Amount</label>
            <input
              type="text"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="amount"
              placeholder="Amount"
            />
          </div>
          <div>
            <label>Rent end Date</label>
            <input
              type="text"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="date"
              placeholder="Rent end Date"
            />
          </div>

          <div className="flex justify-center items-center mt-6">
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
            >
              Rent
            </button>
          </div>
          <div> </div>
        </form>
      </div>
    </div>
  );
};

export default RentProperty;
