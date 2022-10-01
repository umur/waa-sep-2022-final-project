import axios from "axios";
import * as React from "react";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Link, useNavigate} from "react-router-dom";
import {saveProperty} from '../reducers/propertySlice'
import { FaHome, FaMapMarkerAlt } from "react-icons/fa";

export default function CreatePropertyComponent() {


    const [inputState, setInputState] = useState({});

    const onChanged = (e)=>{
        setInputState({
            ...inputState,
            [e.target.name] : e.target.value
        })
        console.log(inputState)
    }


    // const categories = useSelector((state)=> state.categories);

    // console.log(categories);

    // useEffect(()=>{

    //     console.log(categories);

    // })

    const user = localStorage.getItem('user');

    const nav = useNavigate();
    const onSubmitted = async (e)=>{
        e.preventDefault();
        console.log('Inside onSubmitted')

        const property = {
            name: inputState.name,
            homeType:inputState.homeType,
            description:inputState.description,
            price:inputState.price,
            rooms:inputState.rooms,
            area:inputState.area,
            category:{
                id:inputState.propertyType
            },
            address:{
                id:0,
                street:inputState.street,
                city: inputState.city,
                zip: inputState.zip
            }
        }

        await axios.post('properties', property)
            .then(result => nav("/properties"))


//        dispatch(saveProperty(property))
    }

    return (
        <div>
            <div className="container">
                <div className="row  mt-3">
                    <div className="col-xs-12">
                        <h4><FaHome /> Property Information</h4>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-xs-12 col-sm-6">
                        <label>Property Name</label>
                        <input type="text" className="form-control" onChange={onChanged} name="name" placeholder="Property Name"/>
                    </div>
                    <div className="col-xs-6 col-sm-3">
                        <label>Property Type</label><br/>
                        <input type="radio" onChange={onChanged} name="propertyType" value="1" id="forRent"/>
                        <label htmlFor="forRent"> For Rent</label> &nbsp;
                        <input type="radio" onChange={onChanged} name="propertyType" value="2" id="forSell"/>
                        <label htmlFor="forSell"> For Sell</label>
                    </div>
                    <div className="col-xs-6 col-sm-3">
                        <label>Home Type</label>
                        <select name="homeType"  onChange={onChanged} className="form-control">
                            <option value="">--Select One--</option>
                            <option value="HOUSES">Houses</option>
                            <option value="TOWN_HOMES">Town Homes</option>
                            <option value="APARTMENT">Apartment</option>
                            <option value="CONDOS">Condos</option>
                        </select>
                    </div>
                </div>
                <div className="row  mt-3">
                    <div className="col-xs-6 col-sm-4">
                        <label>Price</label>
                        <input type="text" name="price" id="price" onChange={onChanged} className="form-control" placeholder="Price"/>
                    </div>
                    <div className="col-xs-6 col-sm-4">
                        <label>No of rooms</label>
                        <input type="text" name="rooms" id="rooms" onChange={onChanged} className="form-control" placeholder="No of rooms"/>
                    </div>
                    <div className="col-xs-6 col-sm-4">
                        <label>Size</label>
                        <input type="text" name="area" id="area" onChange={onChanged} className="form-control" placeholder="Size"/>
                    </div>
                </div>
                <div className="row  mt-3">

                    <div className="col-xs-12">
                        <label>Description:</label>
                        <textarea className="form-control" onChange={onChanged} name="description" id="description" placeholder="Property description"></textarea>
                    </div>
                </div>
                <div className="row  mt-3">
                    <div className="col-xs-12">
                        <label>Upload pictures:</label>
                        <input type="file" id="files" onChange={onChanged} name="files" multiple className="form-control"/>
                    </div>
                </div>
                <h4><FaMapMarkerAlt /> Address</h4>
                <div className="row  mt-3">
                    <div className="col-xs-12 col-sm-4">
                        <label>Street</label>
                        <input type="text" name="street" onChange={onChanged} id="street" className="form-control" placeholder="Street"/>
                    </div>
                    <div className="col-xs-12 col-sm-4">
                        <label>City</label>
                        <input type="text" name="city" id="city" onChange={onChanged} className="form-control" placeholder="City"/>
                    </div>
                    <div className="col-xs-12 col-sm-4" >
                        <label>Zip Code</label>
                        <input type="text" name="zip" id="zip" onChange={onChanged} className="form-control" placeholder="Zip code"/>
                    </div>
                </div>
                <div className="row  mt-3">
                    <div className="col-xs-12">
                        <input type="button" name="" onClick={onSubmitted}  className="form-control btn btn-success" value="Submit"/>
                    </div>
                </div>

            </div>
            <br/><br/>
        </div>

    )
}
