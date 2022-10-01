import {Link} from "react-router-dom";

export default function PropertyCard(property) {

    return (

        <Link to={'property/' + property.id} className="mt-1">

            <div className="card">
                <div className="card-header">
                  Type:  {property.name}

                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        {property.name}
                        Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go to Property</a>
                </div>
            </div>
        </Link>
    )
}
