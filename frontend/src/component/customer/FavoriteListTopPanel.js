import News from "./CarouselNews";


export default function TopPanel() {
  return (
    <div className='d-flex justify-content-evenly' >
      <div>
        <img
          className="img1"
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brewster-mcleod-architects-1486154143.jpg"
          alt="Property1"
          class="rounded float-left opacity-75" 
          width="350" height="170"
          
        />
      </div>
      <div>
       <News/>
      </div>
      <div>
        <img
          className="img1"
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brewster-mcleod-architects-1486154143.jpg"
          alt="Property1"
          class="rounded float-left opacity-75"
          width="350" height="170"
        />
      </div>
    </div>
  );
}
