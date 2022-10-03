
import TopPanel from "./FavoriteListTopPanel";
import Favorites from "./Favorits";
import React from "react";


export default function CustomerFavoriteList() {
  return (
    <div>
        <div className="container text-center">
            <div >
                <div className="col" style={{minHeight: 100 + "vh", marginTop: 70 + "px"}}>
                    <TopPanel/>
                    <br/>
                   <div className="justify-content-end"> <h3   > Your Favorite List</h3></div>
                    <div>
                        <Favorites/>
                    </div>
                </div>


            </div>
        </div>

    </div>
  );
}

