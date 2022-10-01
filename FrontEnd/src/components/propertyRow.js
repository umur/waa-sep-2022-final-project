import { FaSearch } from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";

export default function PropertyRow(property){
    const rowStyle = {border:"1px green solid", padding:'5px', borderRadius: '5px'};
    const nav = useNavigate()
    const goToDetail = () => {
        nav("/properties/"+property.id)
    }
    return (
        <div className="row mt-2" >

            <div className="card m-3" style={{width: 300}}>
                <div className="card-body">
                    <h5 className="card-title"> {property.name} </h5>
                    <h6 className="card-title">Type: {property.homeType},  Price ${property.price}</h6>
                    <h6 className="card-subtitle mb-3 text-muted"> FairField, Iowa, USA</h6>
                    <p className="card-text">Built in 2010  and is one of the most iconic landmarks in the
                        world.</p>
                    <Link to={"/properties/"+property.id} className="card-link">Show Details</Link>
                    <Link to={"/contact/"+property.id} className="card-link">Contact</Link>
                </div>
            </div>
        </div>
    )
}
