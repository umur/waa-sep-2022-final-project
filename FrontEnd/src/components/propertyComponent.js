import {Link, useFetcher, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import ContactForm from "./contactForm";
import hom1 from '../assets/images/home1.jpeg'


export default function PropertyComponent() {
    const initialState =
        {
            "id": 1,
            "name": "property-1",
            "homeType": null,
            "description": "Awesome villa for Airbnb",
            "price": 50,
            "views": 0,
            "active": true,
            "rented": false,
            "rooms": 4,
            "area": 99.9,
            "category": {
                "id": 1,
                "name": "For Rent"
            },
            "user": null,
            "address": null
        }
    const params = useParams()
    const [property, setProperty] = useState(initialState)
    const  fetchProperty = async () => {
        const result = await axios.get("properties/"+params.id)
        console.log(result.data)
        setProperty(result.data)
    }
    useEffect( ()=>{
        fetchProperty()
    },[])
    return (
        <div>
            <div className=" justify-content-center text-center">
                <img src={hom1} className="card-img" alt="" style={{width:600, height:400}}/>
            </div>
            <h5 className="card-title"> {property.name} </h5>
            <h6 className="card-title">Type: {property.homeType},  Price ${property.price}</h6>
            <h6 className="card-subtitle mb-3 text-muted"> FairField, Iowa, USA</h6>
            <Link to={"/contact/"+property.id} className="btn btn-success">Contact</Link>
            <p className="card-text">Built in 2010  and is one of the most iconic landmarks in the
                world.</p>
        </div>
    )
}
