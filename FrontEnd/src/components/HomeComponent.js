import * as React from "react";
import Properties from "./propertiesComponent";
import Categories from "./CategoriesComponent";
import {Link} from "react-router-dom";
import {FaSearch} from "react-icons/fa";
const houses = "../assets/images/houses.jpeg"
const houses2 = "../assets/images/houses2.jpeg"
//

export default function HomeComponent() {
    return (
            <div className="container " >
                <div className="carousel slide h-300 "  >

                    <div className="carousel-inner h-300" style={{backgroundImage: houses2}}>
                        <div className="carousel-item active opacity-75" style={{backgroundImage: houses2}}>
                            <img src={houses} className="d-block w-100 " alt="..."/>
                        </div>

                    </div>

                </div>

                <div className="hero-image bg-dark">
                    <div className="hero-text flex-column">
                        <div className="d-inline-block">
                            <input style={{width: '400px'}} type="text"
                                   className="input-group-text mb-4 border-1 " placeholder="type to search properties"/>
                        </div>
                        <div>

                        <button>Search</button>
                        </div>
                    </div>
                </div>

                <div className="d-flex bd-highlight">
                    <div className="p-2 flex-fill bd-highlight">

                        <div className="card">
                            <div className="card-header fw-bold">
                                Sale Property
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">
                                   Home Sweet Home
                                </h5>
                                <p className="card-text">
                                    Your next place is closer than you think. Explore the possibilities, and discover a rental you’ll love.
                                </p>
                                <Link to="/properties/new" className="btn btn-warning m-1">Sell now</Link>
                                <Link to="/properties" className="btn btn-success m-1">Buy now</Link>
                            </div>
                        </div>

                    </div>
                    <div className="p-2 flex-fill bd-highlight">
                        <div className="card">
                            <div className="card-header fw-bold">
                                Rents
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">
                                    Let or Get Home</h5>
                                <p className="card-text">
                                    Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.
                                </p>
                                <Link to="/properties/new" className="btn btn-warning m-1">Rent out now</Link>
                                <Link to="/properties?type=rent" className="btn btn-success m-1">Browse now</Link>

                            </div>
                        </div>
                        </div>
                    <div className="p-2 flex-fill bd-highlight">

                        <div className="card">
                            <div className="card-header fw-bold">
                                Unclassified
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">
                                    Sale, Rent, Finance or just browse</h5>
                                <p className="card-text">
                                    Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.
                                </p>
                                <Link to="/properties" className="btn btn-warning ">
                                    Check-in
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                <div className="col-md-6">For Sale</div>
                <div className="col-md-6">For Rent</div>
                </div>
            </div>
    );
}
