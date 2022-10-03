import React from "react";
import Property from "./Property";
import Button from "react-bootstrap/Button";


export default function Properties(props) {

const value = props.properties;

    //TODO Display single property
    console.log(props);

    return(
        <div >
            <div >
                <h3 style={{backgroundColor: "#1872F0",textAlign: "left",padding:"9px",borderRadius: "5px",color:"white",fontSize: "17px"}}>{value.name}</h3>

                    <div>
                        <div>
                            {value.property.map((i) =>
                                <Property property={i}/>
                            )}

                            <br/>

                        </div>

                    </div>
                </div>

        </div>
    )
}