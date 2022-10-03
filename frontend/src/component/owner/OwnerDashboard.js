import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import { Navigate, Route,Routes,useNavigate } from 'react-router-dom'

import {fetchAllOwnersProperty} from "../../store/ownerPropertySlicer";
import OwnerSingleProperty from "./OwnerSingleProperty";
import OwnerFilteredProperty from "./OwnerFilteredProperty";

import Card from 'react-bootstrap/Card';

export default function OwnerDashboard() {


    const value = useSelector((state) => state.ownersProperty);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllOwnersProperty());
    },[]);
    const ownerProperties =value.properties


    const [searchValue, setSearchValue] = useState(0)
    const navigate = useNavigate()
    const getFormData = (id)=>{
        navigate(`/owners/${searchValue}`)
        console.log("Navigation Successful")
    }

        

    return(
        <div>
            <div> <h3> Owner Dashboard </h3> </div>
            <h3 style={{backgroundColor: "#1872F0",textAlign: "left",padding:"9px",borderRadius: "1px",color:"white",fontSize: "17px"}}> Properties add by you</h3>

            <Card border="primary" style={{ padding:"9px", fontWeight: "bold", fontSize: "20px",}}>

                <Card.Body>

                    <Card.Text>
                        <div style={{ padding:"9px",fontWeight: "bold", fontSize: "20px",}}>
                            Search By :
                            <select>
                                <option> id</option>
                                <option> name</option>
                                <option> location</option>
                            </select>
                            <input type="text" style={{ width: "300px" }} onChange={(e)=>setSearchValue(e.target.value)}/>
                           <button onClick={()=>getFormData(searchValue)}>Search</button> 
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
            <div>{ownerProperties.map((property) =>
                <OwnerSingleProperty property = {property}/>
            )}</div>


        </div>
    )
}