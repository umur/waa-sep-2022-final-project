import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {fetchOwnerProperty} from "../../store/ownerPropertySlicer";
import Carousel from "react-bootstrap/Carousel";

export  default function OwnerProperty () {

    const value = useSelector((state) => state.ownerSingleProperty);
    // console.log('prop ',value.properties);
    const property = value.properties;
    const dispatch = useDispatch();
    const {id} = useParams();
    // console.log(id);

    useEffect(() => {
        dispatch(fetchOwnerProperty(id));
    },[]);
    return(
        <div class="container text-center">

        <div class="row">

            <div className="col">
                <div > Type: {property.type}</div>
                <div > Number of bedrooms: {property.numberOfRooms}</div>
                <div > Number of bathrooms: {property.numberOfBathrooms}</div>
                <div > Location: {property.location}</div>
            </div>
            <div className="col">
                <div > Price: {property.price}</div>
                <div > View: {property.views}</div>

            </div>
            <div class="col">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={property.picture1}
                            alt="First slide"
                            width="150"
                            height="300"
                        />
                        <Carousel.Caption>
                            <h3>Master Bed Room</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.pinimg.com/originals/cc/a7/93/cca79332fe33bc8724ed6dd13f911736.jpg"
                            alt="Second slide"
                            width="150"
                            height="300"
                        />

                        <Carousel.Caption>
                            <h3>Living room</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://yourintegrityhome.com/wp-content/uploads/2021/03/Home-Cover-Image-1.jpg"
                            alt="Third slide"
                            width="150"
                            height="300"
                        />

                        <Carousel.Caption>
                            <h3>Bed room</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>

        </div>
    )
}