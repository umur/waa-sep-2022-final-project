import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";



const AddProperty = () => {
  const navigate = useNavigate();



  const [imageState, setImageState] = useState();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: "",
      propertyName: "",
      propertyType: "",
      noOfBedRoom: "",
      noOfBathRoom: "",
      rentAmount: "",
      city: "",
      state: "",
      street: "",
      zipcode: "",
      securityDepositAmount: "",
    },
  });

  const onSubmit = async (data) => {
    let token = JSON.parse(localStorage.getItem("token"));
    let formData = new FormData();
    formData.append("files", imageState);
    const { state, zipcode, street, city } = data;
    const {
      propertyName,
      propertyType,
      noOfBedRoom,
      noOfBathRoom,
      rentAmount,
      securityDepositAmount,
    } = data;

    const updatedData = {
      propertyName,
      propertyType,
      noOfBedRoom,
      noOfBathRoom,
      rentAmount,
      securityDepositAmount,
      address: { state, zipcode, street, city },
    };

    const jsonFile = new Blob([JSON.stringify(updatedData)], {
      type: "application/json",
    });
    formData.append("property", jsonFile, "");
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/properties",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      
    alert("Successfully property added");

    navigate("/owner");
    } catch (error) {
      console.log(error)
      alert("failed to add a property , please verify all the informations");
    }


  };

  const onImageChange = (event) => {
    const file = event.target.files[0];
    setImageState(file);
  };

  return (
    <div className="h-screen flex bg-gray-bg1">
   

      <section class="content">
        <div class="container-fluid">
          <div class="card card-default">
            <form method="post" onSubmit={handleSubmit(onSubmit)}>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Property Name</label>
                      <input
                        type="text"
                        {...register("propertyName", {
                          required: "Property Name is required",
                        })}
                        class="form-control"
                        placeholder="Property Name"
                      />
                      <p className="text-danger">
                        {errors.propertyName?.message}
                      </p>
                    </div>

                    <div class="form-group">
                      <label>Property Type</label>
                      <input
                        type="text"
                        {...register("propertyType", {
                          required: "Property Type is required",
                        })}
                        class="form-control"
                        placeholder="Property Type"
                      />
                      <p className="text-danger">
                        {errors.propertyType?.message}
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>No of Bed Room</label>
                      <input
                        type="text"
                        {...register("noOfBedRoom", {
                          required: "Bed room number is required",
                        })}
                        class="form-control"
                        placeholder="No of bed room"
                      />
                      <p className="text-danger">
                        {errors.noOfBedRoom?.message}
                      </p>
                    </div>

                    <div class="form-group">
                      <label>No of Bath Room</label>
                      <input
                        type="text"
                        {...register("noOfBathRoom", {
                          required: "Bath room number is required",
                        })}
                        class="form-control"
                        placeholder="No of bath room"
                      />
                      <p className="text-danger">
                        {errors.noOfBathRoom?.message}
                      </p>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>State</label>
                      <input
                        type="text"
                        {...register("state", {
                          required: "State Name is required",
                        })}
                        class="form-control"
                        placeholder="State Name"
                      />
                      <p className="text-danger">{errors.state?.message}</p>
                    </div>

                    <div class="form-group">
                      <label>City</label>
                      <input
                        type="text"
                        {...register("city", { required: "City is required" })}
                        class="form-control"
                        placeholder="Provide City"
                      />
                      <p className="text-danger">{errors.city?.message}</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Street</label>
                      <input
                        type="text"
                        {...register("street", {
                          required: "Street is required",
                        })}
                        class="form-control"
                        placeholder="Street"
                      />
                      <p className="text-danger">{errors.street?.message}</p>
                    </div>

                    <div class="form-group">
                      <label>Zip</label>
                      <input
                        type="text"
                        {...register("zipcode", {
                          required: "Zip is required",
                        })}
                        class="form-control"
                        placeholder="Zip code"
                      />
                      <p className="text-danger">{errors.zip?.message}</p>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Rent Amount</label>
                      <input
                        type="number"
                        {...register("rentAmount", {
                          required: "Rent amount is required",
                        })}
                        class="form-control"
                        placeholder="Rent Amount"
                      />
                      <p className="text-danger">
                        {errors.rentAmount?.message}
                      </p>
                    </div>
                    <div class="form-group">
                      <label>Upload Image</label>
                      <input
                        class="form-control"
                        type="file"
                        onChange={(event) => onImageChange(event)}
                        multiple
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Security Deposit Amount</label>
                      <input
                        type="text"
                        {...register("securityDepositAmount", {
                          required: "Security deposit amount is required",
                        })}
                        class="form-control"
                        placeholder="Security Deposit Amount"
                      />
                      <p className="text-danger">
                        {errors.securityDepositAmount?.message}
                      </p>
                    </div>
                  </div>
                </div>
                <input type="submit" class="btn btn-primary" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddProperty;
