import Admin from "./admin";
import AdminDashBoard from "./admin/AdminDashBoard";
import Dashboard from "./customer/Dashboard"
import AddProperty from "./customer/AddProperty";
import AdminManageCustomer from "./admin/AdminManageCustomer";
import AdminManageOwner from "./admin/AdminManageOwner";
import AdminManageProperties from "./admin/AdminManageProperties";
import PropertiesDetail from "./customer/PropertyDetails";
import LoginCallback from "./auth/LoginCallback";
import Index from "./index";
import LogoutCallback from "./auth/LogoutCallback";
import CustomerFavoriteList from "./customer/CustomerFavoriteList";
import OwnerDashboard from "./owner/OwnerDashboard";
import OwnerProperty from "./owner/OwnerProperty";
import OwnerFilteredProperty from "./owner/OwnerFilteredProperty";

export default [
    {
        path: "/",
        element: <Index/>,
        children: [
            {
                path: "login-callback",
                element: <LoginCallback/>
            },
            {
                path: "logout-callback",
                element: <LogoutCallback/>
            },
            {
                path: "admin",
                element: <Admin/>,
                children: [
                    {
                        path: "dashboard",
                        element: <AdminDashBoard/>
                    },
                    {
                        path: "customers",
                        element: <AdminManageCustomer/>
                    },
                    {
                        path: "owners",
                        element: <AdminManageOwner/>
                    },
                    {
                        path: "properties",
                        element: <AdminManageProperties/>
                    }
                ]
            },
            {
                path: "/dashboard",
                element: <Dashboard/>
            },
            {
                path: "/products",
                element: <PropertiesDetail/>
            },
            {
                path: '/property/add',
                element: <AddProperty/>
            },

            {
                // "/products",
                path: "/property/:id",
                element: <PropertiesDetail />
            },
            {
                path: "/favoriteList",
                element: <CustomerFavoriteList/>
            },
            {
                path: "/owners",
                element: <OwnerDashboard/>
            },
            {

                path: "owner/property/:id",
                element: <OwnerProperty />
            },
            {
                path: "owners/:id",
                element: <OwnerFilteredProperty />
            }
        ]

    }
]