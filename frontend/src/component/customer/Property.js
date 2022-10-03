import React from "react";
import Button from "react-bootstrap/Button";
import {useDispatch, useSelector} from "react-redux";
import {deleteFavProperty} from "../../store/favoritePropertySlicer";

export default function Property(props) {

    const value = props.property;


    //TODO Display single property
    const val = useSelector((state) => state.favorite);
    const dispatch = useDispatch();
    const deleteProperty = () => {
        // dispatch(deleteFavProperty(value.id));

        console.log("hhhha");
        console.log('ppp',value);

    }

    return(
        <div >
            <div class="d-flex justify-content-start" >
                <div>
                    <img
                        className="img1"
                        src={value.picture}
                        alt="Property1"
                        width="280"
                        height="170"
                    />
                    <br/>
                </div>

                <div>
                    <div className="h5">Price :$ {value.price}</div>
                    <div>numberOfBathrooms:{value.numberOfBathrooms}</div>
                    <div>numberOfBathrooms: {value.numberOfRooms}</div>
                    <div>Size : {value.size}</div>
                    <div>Views: {value.view}</div>
                    <Button variant="primary" onClick={deleteProperty} >Delete</Button>

                    <br/>
                </div>
                <br/>
            </div>

        </div>
    )
}