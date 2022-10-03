import Carousel from 'react-bootstrap/Carousel';

function News() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://thepetridish.my/wp-content/uploads/2019/06/blue-sky.jpg"
          alt="First slide"
          width="750" height="170"
          class="opacity-25"
        />
        <Carousel.Caption>
          <h3 class="text-secondary" >First slide label</h3>
          <p class="text-secondary">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://thepetridish.my/wp-content/uploads/2019/06/blue-sky.jpg"
          alt="Second slide"
          width="750" height="170"
          class="opacity-25"
        />

        <Carousel.Caption>
          <h3 class="text-secondary">Second slide label</h3>
          <p class="text-secondary" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://thepetridish.my/wp-content/uploads/2019/06/blue-sky.jpg"
          alt="Third slide"
          width="750" height="170"
          class="opacity-25"
        />

        <Carousel.Caption>
          <h3 class="text-secondary">Third slide label</h3>
          <p class="text-secondary"> Praesent commodo cursus magna, vel scelerisque nisl consectetur. </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default News;