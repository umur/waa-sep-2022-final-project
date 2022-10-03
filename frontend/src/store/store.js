import {configureStore} from "@reduxjs/toolkit";
import {reducer as propertyReducer} from "./propertySlicer";
import {reducer as customerReducer} from "./customerSlicer";
import {reducer as userReducer} from "./userSlicer";
import { reducer as customerGraphReducer} from "./graphSlicerAdmin"
import {reducer as propertyAdminReducer} from "./propertySlicerAdmin";
import {reducer as singlePropertyReducer} from "./SingleCustomerSlicer";
import {reducer as favoriteReducer} from "./favoritePropertySlicer";
import {reducer as ownersPropertyReducer} from "./ownerPropertySlicer";
import {reducer as editPropertyReducer} from "./editPropertySlicer";
import {reducer as ownerReducer} from "./ownerSlicer";



export const store = configureStore({
    reducer: {
        property: propertyReducer,
        graphCustomer: customerGraphReducer,
        customer: customerReducer,
        propertyAdmin: propertyAdminReducer,
        singleCustomer: singlePropertyReducer,
        favorite: favoriteReducer,
        ownersProperty: ownersPropertyReducer,
        editProperty: editPropertyReducer,
        user: userReducer,
        owner: ownerReducer,
    }
});
