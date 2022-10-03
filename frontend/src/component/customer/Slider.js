import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg"
          alt="First slide"
          width="150"
          height="400"
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
          height="400"
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
            height="400"
        />

        <Carousel.Caption>
          <h3>Bed room</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;