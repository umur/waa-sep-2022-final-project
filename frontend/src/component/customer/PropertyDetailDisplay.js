import PropertyImages from "./PropertyImages";

export default function PropertyDetailDisplay() {
    return(
        <div className='d-flex justify-content-evenly'>

                    <div >
                        <img
                            className="img1"
                            src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2018_30/1355945/home-exterior-today-180726-tease.jpg"
                            alt="Property1"
                            width="300" height="170"
                            class=" float-left opacity-75"
                            // borderRadius: 5
                        />
                    </div>
                    <div >
                        <img
                            className="img1"
                            src="https://www.safewise.com/app/uploads/featured-image-first-home.jpg"
                            alt="Property1"
                            width="350" height="170"
                            class=" float-left opacity-75"

                        />
                    </div>
                    <div class="col">
                        <img
                            className="img1"
                            src="https://ahpweb.blob.core.windows.net/ahpcomimages/buildingcenters/90/images/4242.jpg"
                            alt="Property1"
                            width="350" height="170"
                            class=" float-left opacity-75"

                        />
                    </div>
                    <div class="col">
                        <img
                            className="img1"
                            src="https://www.one-automation.com/wp-content/uploads/2022/02/Fibaro-System-in-Dubai.jpg"
                            alt="Property1"
                            width="350" height="170"
                            class=" float-left opacity-75"

                        />

                    </div>
            <div className="col">
                <img
                    className="img1"
                    src="https://i2.wp.com/mads.media/wp-content/uploads/2021/06/Exterior-Night-1.jpg?fit=1000%2C667&ssl=1"
                    alt="Property1"
                    width="350" height="170"
                    className=" float-left opacity-75"

                />

            </div>


        </div>
)
}