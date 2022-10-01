import axios from "axios";
import * as React from "react";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import PropertyRow from "./propertyRow";
import {FaSearch} from "react-icons/fa";


export default function Properties() {
    const initialProperties = [
        {
            id: 1,
            name: "Property 1",
        },
        {
            id: 2,
            name: "Property 2",
        },
    ]
    const [properties, setProperties] = useState(initialProperties);

    const fetchProperties = async () => {
        await axios.get('/properties/')
            .then((result) => {
                console.log(result.data)
                setProperties(result.data);
                console.log('>>>>>>>>>>>>>>>>>>>>>>>>.');
            })

    }

    useEffect(() => {
        fetchProperties();
    }, [])

    const rowStyle = {border: "1px green solid", padding: '5px', borderRadius: '5px'};
    return (
        <div className="container">
            <div>
                <Link to='/properties/new'>Add Property </Link>
            </div>
            <div className="border-1 ">
                <input type="text" className="col-md-6" style={rowStyle} placeholder={'search properties'}/>
                <span className="btn-success" style={rowStyle}> <FaSearch/> </span>

            </div>
            <h2> Featured Properties </h2>

            <div className="container">
                <div className="d-flex ">
                    {
                        properties.map((p) => <PropertyRow key={p.id} {...p} />)
                    }
                </div>
            </div>
        </div>

    )
}
