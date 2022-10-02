import React from "react";
import PropertyLocation from "./PropertyLocation";
import PropertyPrice from "./PropertyPrice";
import PropertyRoom from "./PropertyRoom";
import PropertySquareFeet from "./PropertySquareFeet";



const Chart =() =>{
  
    return (
        <div>
              <h1 className="text-center mt-5 mb-5">Charts</h1>
            <div class="container text-center">
              <div class="row">
                <div class="col">
                <PropertyLocation/>
                </div>
                <div class="col">
                <PropertyPrice/>
                </div>
              </div>
              <div class="row mt-5">
                <div class="col">
                  <PropertySquareFeet/>
                </div>
                <div class="col">
                <PropertyRoom/>
                </div>
              </div>
              </div>
         
          {/* {console.log({array})} */}
        
        </div>
    )
}
export default Chart